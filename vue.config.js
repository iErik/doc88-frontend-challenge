const path = require('path')
const webpack = require('webpack')

const alias = location => path.join(__dirname, location)


module.exports = {
  chainWebpack: config =>
    config.resolve.alias
      .set('@src', alias('src'))

      .set('@mixins', alias('src/mixins'))
      .set('@containers', alias('src/containers'))
      .set('@components', alias('src/components'))
      .set('@common', alias('src/components/Common'))

      .set('@styles', alias('src/styles'))
      .set('@assets', alias('src/assets'))
      .set('@store', alias('src/store'))
}
