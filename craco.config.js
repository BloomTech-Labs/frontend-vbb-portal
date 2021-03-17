const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // Ant Design vars here: https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
            modifyVars: {
              '@primary-color': 'fade(#ff914d, 85%)', //light orange
              '@border-radius-base': '15px',
              '@body-background': '#fffff6', //cream
              '@component-background': '#fffff6', //cream
              '@font-family': 'Nunito, sans-serif',
              '@icon-color': '#549bea', //blue
              '@font-size-base': '18px',
              '@background-color-base': '#fffff6', //cream
              '@btn-primary-bg': '#549bea', //blue
              '@btn-height-base': '50px',
              '@label-required-color': '#549bea', //blue
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
