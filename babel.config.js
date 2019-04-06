module.exports = {
  presets: [
    ['@vue/app', {
      "useBuiltIns": "usage",
      "debug": true,
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }]
  ]
}
