# parcel-plugin-overwolf

This [parcel](https://github.com/parcel-bundler/parcel) plugin enables you to use an Overwolf `manifest.json` as an entry point. For more information about Overwolf's `manifest.json`, please refer to the [Overwolf Docs](http://developers.overwolf.com/documentation/sdk/overwolf/manifest-json/).

## Installation

Install via npm:
```sh
npm install --save-dev parcel-plugin-overwolf
```
or via yarn:
```sh
yarn add -D parcel-plugin-overwolf
```

## Usage

### Quick Start

After installing this plugin, use `manifest.json` as your entry point, like so:
```sh
parcel src/manifest.json
```
Your assets will now be resolved from the contents of your manifest file.

Assets resolved by this plugin:
- `meta.icon`
- `meta.icon_grey`
- `meta.launcher_icon`
- `meta.splash_image`
- `data.windows[...].file`

## Licence

Apache 2.0
