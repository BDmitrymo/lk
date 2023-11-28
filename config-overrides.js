const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@/components': 'src/components',
    '@/ui': 'src/ui',
    '@/layouts': 'src/layouts',
    '@/hooks': 'src/hooks',
    '@/services': 'src/services',
    '@/assets': 'src/assets',
    '@/utils': 'src/utils',
    '@/configs': 'src/configs',
  })(config)

  return config
}
