package macros;

#if macro
import haxe.macro.Compiler;
import haxe.macro.Context;
import haxe.io.Path;
import sys.io.File;
import sys.FileSystem;

class AssetsMacro
{
    public static final MONACO_ASSETS_FOLDER:String = 'monaco';

    public static function build()
    {
        copyHaxeLanguageServer();
     
        embedAssets(MONACO_ASSETS_FOLDER);
    }

    private static function embedAssets(source:String, ?name:String):Void
    {
        if (name == null) name = source;

        if (FileSystem.isDirectory(source))
        {
            for (file in FileSystem.readDirectory(source))
            {
                embedAssets(Path.join([source, file]), Path.join([name, file]));
            }
        }
        else
        {
            Context.addResource(name, File.getBytes(source));
        }
    }

    private static function copyHaxeLanguageServer():Void
    {
        var output = Compiler.getOutput();
        var bin:String = Context.definedValue('HAXE_LANGUAGE_SERVER');
        var dir:String = Path.directory(bin);
        var outputBin:String = Path.join([output, bin]);
        var outputDir:String = Path.join([output, dir]);
        
        if (!FileSystem.exists(outputDir))
            FileSystem.createDirectory(outputDir);
        
        File.copy(bin, outputBin);
    }
}
#end