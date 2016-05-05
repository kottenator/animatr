# Animatr

DOM/CSS-free animation/tween library

## Install dev version

```sh
git clone <repo>
npm install
```

## Build

### Unminified

Run `browserify` (standalone) + `babelify` + `exorcist` + `derequire`:

```sh
npm run build-js

# Equal to:
browserify src/easing.js -d -s animatr \
    -t [ babelify --presets=babel-preset-es2015 ] | \
    exorcist dist/easing.js.map | \
    derequire > dist/easing.js
```
- `-s` (standalone): object in the global scope (window)
- `babelify`: Babel for Browserify
- `exorcist`: extract inline source map into file
- `derequire`: rename "require" entries to prevent AMD auto-detect

### Minified

Run `browserify` (standalone) + `babelify` + `minifyify` + `derequire`

```sh
npm run build-js-min

# Equal to:
browserify src/easing.js -d -s animatr \
    -t [ babelify --presets=babel-preset-es2015 ] \
    -p [ minifyify --output dist/easing.map.json --map=easing.map.json ] | \
    derequire > dist/easing.js
```
- `-s` (standalone): object in the global scope (window)
- `babelify`: Babel for Browserify
- `minifyify`: minify JS source code
- `derequire`: rename "require" entries to prevent AMD auto-detect
