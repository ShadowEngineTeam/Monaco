package languageServer;

import utils.Util;
import monaco.MonacoLoader;
import sys.io.Process;
import haxe.io.Input;
import haxe.io.Bytes;
import sys.thread.Thread;
import haxe.Json;
import haxe.Exception;

using StringTools;

@:nullSafety
class HaxeLanguageServer
{
	public static var process(default, null):Null<Process>;

	public static function init():Void
	{
		process = new Process(Util.getDefine('HAXE_LANGUAGE_SERVER'), []);

		if (MonacoLoader.webview != null && process != null)
		{
			MonacoLoader.webview.bind('lspSend', (seq, req, _) ->
			{
				// trace('lspSend called: $req');
				var args:Array<String> = Json.parse(req);
				var json:String = args[0];

				var bytes = Bytes.ofString(json);
				var header = 'Content-Length: ${bytes.length}\r\n\r\n';
				process.stdin.writeString(header);
				process.stdin.write(bytes);
				process.stdin.flush();

				MonacoLoader.webview.resolve(seq, 0, '{}');
			}, null);
		}

		Thread.create(() ->
		{
			while (MonacoLoader.webview != null)
			{
				try
				{
					if (process == null)
						break;

					var msg = readLspMessage(process.stdout);

					if (msg == null)
						break;
					// trace('sending message: $msg');
					var js = 'window._lspReceive(${haxe.Json.stringify(msg)})';
					MonacoLoader.webview.dispatch((_, _) ->
					{
						MonacoLoader.webview.eval(js);
					}, null);
				}
				catch (e:Exception)
				{
					trace('HaxeLanguageServer read error: ${e.stack}');
					break;
				}
			}
		});
	}

	public static function exit():Void
	{
		if (process != null)
		{
			process.kill();
			process.close();
			process = null;
		}
	}

	private static function readLspMessage(input:haxe.io.Input):Null<String>
	{
		var contentLength = 0;
		while (true)
		{
			var line = input.readLine();

			line = StringTools.trim(line);
			if (line.length <= 0)
				break;

			// iLine running LineOS for $99^⁹⁹
			var iLine:Null<Int> = Std.parseInt(line.substr(16));
			if (line.startsWith('Content-Length: ') && iLine != null)
				contentLength = iLine;
		}

		if (contentLength == 0)
			return null;

		var bytes = input.read(contentLength);

		return bytes.toString();
	}
}
