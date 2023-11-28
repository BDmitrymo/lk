const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@/components': 'src/components',
    '@/ui': 'src/ui',
    '@/hooks': 'src/hooks',
    '@/services': 'src/services',
    '@/assets': 'src/assets',
    '@/utils': 'src/utils',
    '@/config': 'src/config',
  })(config)

  return config
}
