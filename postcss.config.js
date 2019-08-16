module.exports = {
  plugins: [
    require('precss'),
    require('postcss-fail-on-warn'),
    require('cssnano'),
    require('lost')
  ]
}
