module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [ //配置vant2按需引入设置
    ['import', {
      'libraryName': 'vant',
      'libraryDirectory': 'es',
      'style': true
    }, 'vant'],
    ["import", {
      "libraryName": "wot-design",
      "style": true
    }]
  ]
}