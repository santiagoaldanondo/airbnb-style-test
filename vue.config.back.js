/* eslint-disable no-param-reassign */

// This module is used to visualize css style in development
function enableShadowCss(config) {
  const configs = [
    config.module.rule('vue').use('vue-loader'),
    config.module.rule('css').oneOf('vue-modules').use('vue-style-loader'),
    config.module.rule('css').oneOf('vue').use('vue-style-loader'),
    config.module.rule('css').oneOf('normal-modules').use('vue-style-loader'),
    config.module.rule('css').oneOf('normal').use('vue-style-loader'),
  ];
  configs.forEach(c => c.tap((options) => {
    options.shadowMode = true;
    return options;
  }));
}

module.exports = {
  // https://cli.vuejs.org/guide/webpack.html#chaining-advanced
  chainWebpack: (config) => {
    enableShadowCss(config);
  },
};
