function OverwolfPlugin (bundler) {
  bundler.addAssetType('.json', require.resolve('./OverwolfManifestAsset'))
}

module.exports = OverwolfPlugin
