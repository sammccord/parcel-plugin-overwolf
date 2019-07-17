const { Asset } = require('parcel-bundler')

const iconKeys = ['icon', 'icon_grey', 'launcher_icon', 'splash_image']

class OverwolfManifestAsset extends Asset {
  constructor (name, options) {
    super(name, options)
    // this.isAstDirty = false
    this.type = 'json'
  }

  parse (ast) {
    // parse code to an AST
    return JSON.parse(ast)
  }

  collectDependencies () {
    this.processMeta()
    this.processData()
  }

  processMeta () {
    const meta = this.ast.meta
    iconKeys.forEach(icon => {
      if (meta[icon]) meta[icon] = this.addURLDependency(meta.icon)
    })
  }

  processData () {
    const data = this.ast.data
    Object.entries(data.windows || {}).forEach(([key, window]) => {
      if (window.file) this.addURLDependency(window.file, { entry: true })
    })
  }

  generate () {
    return JSON.stringify(this.ast)
  }
}

module.exports = OverwolfManifestAsset
