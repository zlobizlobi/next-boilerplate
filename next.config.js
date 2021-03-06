const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['@hooks'] = path.join(__dirname, 'src/hooks')
    config.resolve.alias['@config'] = path.join(__dirname, 'src/config')
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles')
    config.resolve.alias['@lib'] = path.join(__dirname, 'src/lib')

    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true, svgo: false}}],
    })
    return config
  },
}
