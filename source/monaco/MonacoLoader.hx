package monaco;

import haxe.Exception;
import languageServer.HaxeLanguageServer;
import webview.WebView;
import haxe.atomic.AtomicBool;

using StringTools;

@:nullSafety
class MonacoLoader
{
	public static var webview:Null<WebView> = null;
	public static var running:AtomicBool = new AtomicBool(false);

	public static function load(debug:Bool = false, cwd:String, hxml:String, ?workspaceName:String):Void
	{
		MonacoServer.startServer('monaco');

		webview = new WebView(debug);
		webview.setTitle('Monaco Editor');
		webview.setSize(1280, 720, NONE);
		HaxeLanguageServer.init();
		FileSystemBridge.init(cwd);

		var loadArgs = '?cwd=$cwd&hxml=$hxml';
		if (workspaceName != null)
			loadArgs += '&name=$workspaceName';

		webview.navigate(MonacoServer.resolveAsset('src/index.html') + loadArgs);

		running.store(true);
		try
		{
			webview.run();
		}
		catch (e:Exception)
		{
			trace('WebView Main Loop ran into an exception: ${e.stack}');
		}

		cleanup(false);
	}

	public static function cleanup(terminate:Bool = true):Void
	{
		if (!running.load())
			return;

		running.store(false);
		HaxeLanguageServer.exit();
		MonacoServer.closeServer();

		if (webview != null)
		{
			if (terminate)
				webview.terminate();
			webview.destroy();
			webview = null;
		}
	}
}
