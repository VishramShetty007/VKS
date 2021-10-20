const themeConfig = require('./src/styles/theme-config');
const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: false
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: themeConfig
  })
);
