package monaco;

import webview.WebView;
import monaco.MonacoLoader;
import sys.io.File;
import sys.FileSystem;
import haxe.io.Path;
import haxe.Json;

using StringTools;
using utils.Util;

@:nullSafety
class FileSystemBridge
{
	private static var cwd(default, null):String = '';

	public static function init(cwd:String):Void
	{
		FileSystemBridge.cwd = cwd;

		var webview:Null<WebView> = MonacoLoader.webview;
		if (webview == null)
			return;

		webview.bind('fsReadFile', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var absolutePath:String = resolvePath(args[0]);

			try
			{
				var content = File.getContent(absolutePath);
				webview.resolve(seq, 0, Json.stringify(content));
			}
			catch (e)
			{
				webview.resolve(seq, 1, Json.stringify(e.message));
			}
		}, null);

		webview.bind('fsWriteFile', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var absolutePath:String = resolvePath(args[0]);
			var content:String = args[1];

			try
			{
				File.saveContent(absolutePath, content);
				webview.resolve(seq, 0, '{}');
			}
			catch (e)
			{
				webview.resolve(seq, 1, Json.stringify(e.message));
			}
		}, null);

		webview.bind('fsExists', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var absolutePath:String = resolvePath(args[0]);
			var exists:Bool = FileSystem.exists(absolutePath);
			webview.resolve(seq, 0, Json.stringify(exists));
		}, null);

		webview.bind('fsReadDir', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var absolutePath:String = resolvePath(args[0]);

			try
			{
				var entries = FileSystem.readDirectory(absolutePath);
				var result = entries.map(name ->
				{
					var fullPath = Path.join([absolutePath, name]);
					var isDir = FileSystem.isDirectory(fullPath);
					{name: name, isDirectory: isDir};
				});
				webview.resolve(seq, 0, Json.stringify(result));
			}
			catch (e)
			{
				webview.resolve(seq, 1, Json.stringify(e.message));
			}
		}, null);

		webview.bind('fsIsDirectory', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var absolutePath:String = resolvePath(args[0]);
			var isDir:Bool = FileSystem.exists(absolutePath) && FileSystem.isDirectory(absolutePath);
			webview.resolve(seq, 0, Json.stringify(isDir));
		}, null);

		webview.bind('fsMkdir', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var absolutePath:String = resolvePath(args[0]);

			try
			{
				FileSystem.createDirectory(absolutePath);
				webview.resolve(seq, 0, '{}');
			}
			catch (e)
			{
				webview.resolve(seq, 1, Json.stringify(e.message));
			}
		}, null);

		webview.bind('fsDelete', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var absolutePath:String = resolvePath(args[0]);
			var recursive:Bool = args.length > 1 ? args[1] == 'true' : false;

			try
			{
				if (FileSystem.isDirectory(absolutePath))
				{
					if (recursive)
						deleteDirectory(absolutePath);
					else
						FileSystem.deleteDirectory(absolutePath);
				}
				else
				{
					FileSystem.deleteFile(absolutePath);
				}
				webview.resolve(seq, 0, '{}');
			}
			catch (e)
			{
				webview.resolve(seq, 1, Json.stringify(e.message));
			}
		}, null);

		webview.bind('fsRename', (seq, req, _) ->
		{
			var args:Array<String> = Json.parse(req);
			var oldAbsolute:String = resolvePath(args[0]);
			var newAbsolute:String = resolvePath(args[1]);

			try
			{
				FileSystem.rename(oldAbsolute, newAbsolute);
				webview.resolve(seq, 0, '{}');
			}
			catch (e)
			{
				webview.resolve(seq, 1, Json.stringify(e.message));
			}
		}, null);
	}

	private static function deleteDirectory(path:String):Void
	{
		for (entry in FileSystem.readDirectory(path))
		{
			var fullPath = Path.join([path, entry]);
			if (FileSystem.isDirectory(fullPath))
				deleteDirectory(fullPath);
			else
				FileSystem.deleteFile(fullPath);
		}
		FileSystem.deleteDirectory(path);
	}

	private static function resolvePath(path:String):String
	{
		path = path.applyBackslashes();
		return Path.isAbsolute(path) ? path : Path.join([cwd, path]);
	}
}
