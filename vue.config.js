const path = require('path')
const webpack = require('webpack')

const alias = location => path.join(__dirname, location)


module.exports = {
  chainWebpack: config =>
    config.resolve.alias
      .set('@src', alias('src'))
      .set('@components', alias('src/components'))
      .set('@styles', alias('src/styles'))
      .set('@assets', alias('src/assets'))
      .set('@store', alias('src/store'))
}
