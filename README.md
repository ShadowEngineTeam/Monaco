# Monaco
An implementation of the Monaco Editor (using [monaco-vscode-api](https://github.com/CodinGame/monaco-vscode-api)) into a webview with functionality for the [Haxe Language Server](https://github.com/vshaxe/haxe-language-server) and local workspaces.

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
The output will automatically overwrite the compiled source in the [monaco](https://github.com/ShadowEngineTeam/Monaco/tree/main/monaco) folder which is embedded into the compiled haxe binary and loaded through the webview.

# Building & Bundling The Haxe Language Server

Haxe Language Server is written in Haxe (wow) then compiled to nodejs. We also bundle it into a binary to avoid requiring nodejs as a dependency when running a release build.

## Building
I have no fucking clue how to build that shit it always gave me errors so I just copied the language server from the vscode extension :pray:

But generally it should be like this:

First clone the repository

```bash
git clone https://github.com/vshaxe/haxe-language-server
cd haxe-language-server
```

Then create a newrepo inside of it so the libraries aren't downloaded globally but inside of a local `.haxelib` folder using:
```bash
haxelib newrepo
```

Then install the libraries using the state file:
```bash
haxelib state load install.hxml
```

Then finally run the build
```bash
haxe build.hxml
```

If it compiled for you then congrats the output should supposedly be in `bin/server.js` relative to the build.hxml. You might want to move it to `client/haxe/server.js`.

## Bundling
We prebuild the compiled `server.js` into x64_86 and arm64 binaries using the npm [@yao-pkg/pkg](https://github.com/yao-pkg/pkg) for Windows, Linux and Mac.

If you want to update the language server or build for armv7 then follow the build instructions below.

First you must install the pkg library globally
```bash
npm install -g @yao-pkg/pkg
```
Then you may bundle it for the following targets:
### Windows
```bash
pkg client/haxe/server.js --targets node22-win-x64 --output bin/win/haxe-language-server-x64
pkg client/haxe/server.js --targets node22-win-arm64 --output bin/win/haxe-language-server-arm64
```

### Linux
```bash
pkg client/haxe/server.js --targets node22-linuxstatic-x64 --output bin/linux/haxe-language-server-x64
pkg client/haxe/server.js --targets node22-linuxstatic-arm64 --output bin/linux/haxe-language-server-arm64
pkg client/haxe/server.js --targets node22-linuxstatic-armv7 --output bin/linux/haxe-language-server-armv7
```

### macOS
```bash
pkg client/haxe/server.js --targets node22-macos-x64 --output bin/mac/haxe-language-server-x64
pkg client/haxe/server.js --targets node22-macos-arm64 --output bin/mac/haxe-language-server-arm64
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
