package;

import haxe.io.Path;
import utils.Util;
import monaco.MonacoLoader;
import sys.thread.Thread;

@:cppInclude("signal.h")
@:cppInclude("monaco/MonacoLoader.h")
#if windows
@:cppInclude("windows.h")
#end
@:cppNamespaceCode('
static volatile sig_atomic_t shouldExit = 0;
')
class Main
{
	public static function main()
	{
		Util.initCustomTrace();

		// If you ctrl+c on console while the thing is running
		// Then the thing will die cuz server + language server process didn't close
		// These make sure they always close. Both are supposed to be DIFFERENT solutions the SAME THING
		// But for some reason they only do their job when BOTH are implemented
		// So do NOT ever think of getting rid of one.
		Main.registerSignalHandlers();
		#if windows
		Main.startSafeExitThread();
		#end

		Main.loadMonaco();
	}

	private static function loadMonaco():Void
	{
		var appCwd = Sys.getCwd();
		var cwd:String = Path.join([appCwd, 'template']);
		var hxml:String = Path.join([appCwd, 'template', 'build.hxml']);
		var name:String = 'test';
		MonacoLoader.load(true, cwd, hxml, name);
	}

	private static function startSafeExitThread():Void
	{
		Thread.create(() ->
		{
			try
			{
				while (true)
				{
					Sys.stdin().readByte();
					if (!MonacoLoader.running.load())
						break;
				}
			}
			catch (e)
			{
				if (MonacoLoader.running.load())
				{
					MonacoLoader.webview.dispatch((_, _) ->
					{
						MonacoLoader.cleanup();
						Sys.exit(0);
					}, null);
				}
			}
		});
	}

	private static function registerSignalHandlers():Void
	{
		untyped __cpp__('
            struct SH {
                static void handle(int) {
                    shouldExit = 1;
                }
                #ifdef _WIN32
                static BOOL WINAPI console(DWORD) {
                    shouldExit = 1;
                    return TRUE;
                }
                #endif
            };
            ::signal(SIGINT, SH::handle);
            ::signal(SIGTERM, SH::handle);
            #ifdef _WIN32
            ::signal(SIGBREAK, SH::handle);
            ::SetConsoleCtrlHandler(SH::console, TRUE);
            #endif
        ');

		Thread.create(() ->
		{
			while (true)
			{
				if (untyped __cpp__('shouldExit'))
				{
					if (MonacoLoader.running.load() && MonacoLoader.webview != null)
					{
						MonacoLoader.webview.dispatch((_, _) ->
						{
							MonacoLoader.cleanup(false);
							Sys.exit(0);
						}, null);
					}
					break;
				}

				Sys.sleep(0.05);
			}
		});
	}
}
