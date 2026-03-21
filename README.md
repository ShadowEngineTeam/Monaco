# Monaco
An implementation of the Monaco Editor (using [monaco-vscode-api](https://github.com/CodinGame/monaco-vscode-api)) into a webview with functionallity for the [Haxe Language Server](https://github.com/vshaxe/haxe-language-server) and local workspaces.

# Building The Client
The editor is written in JS because that's what Monaco Editor uses.
It's source can be found in the [client](https://github.com/ShadowEngineTeam/Monaco/tree/main/client) folder.
It uses Vite Build so you need to have npm installed to build it. You can also use bun if you're a freaky enough with JS shtuff

```bash
cd client
npm install
npm run build
```
Or with bun (you freak)

```bash
cd client
bun install
bun run build
```
The output will automatically overwrite the compiled source in the [monaco folder](https://github.com/ShadowEngineTeam/Monaco/tree/main/monaco) which is embedded into the compiled haxe binary and loaded through the webview.

# Building & Bundling The Haxe Language Server

Haxe Language Server is written in Haxe (wow) then compiled to nodejs. We also bundle it into a binary to avoid requiring nodejs as a dependency when running a release build.

## Building
I have no fucking clue how to build that shit it always gave me errors so i just copied the language server from the vscode extension :pray:

## Bundling
Using the npm [@yao-pkg/pkg](https://github.com/yao-pkg/pkg) library you can pack the compiled `server.js` into a binary for Windows, Linux or Mac.

First you must install the library globally
```bash
npm install -g @yao-pkg/pkg
```
Then you may bundle it for the following targets:
### Windows
```bash
pkg client/haxe/server.js --targets node18-win-x64 --output bin/haxe-language-server
```

### Linux
```bash
pkg client/haxe/server.js --targets node18-linux-x64 --output bin/haxe-language-server
```

### macOS
```bash
pkg client/haxe/server.js --targets node18-macos-x64 --output bin/haxe-language-server
```

### NOTE
The output MUST be on the bin folder so the haxe macro can pick it up when building the app. you may compile the server from a different source path but we drop it inside of `client/haxe/server.js`.

# Building The App
It's just a haxe C++ app so just make sure you have haxe, hxcpp and the target's required build tools (like msvc/mingw for windows or clang/gcc for linux or sumth idk)

You need to install hxwebview through
```bash
haxelib install hxwebview
```

Then just run the build commad:
## Windows

```bash
haxe build-win.hxml
```

The exe will be found in `./export/win/Main.exe` alongside it the required binaries are `WebView2Loader.dll` and `bin/haxe-language-server.exe`

## Linux
TBD

## OSX
TBD