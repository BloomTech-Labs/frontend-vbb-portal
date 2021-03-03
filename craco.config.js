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
                    '@primary-color': '#ff914d', //orange
                    '@heading-color': '#fff', //white
                    '@border-radius-base': '5px',
                    '@body-background': '#fffff6', //cream
                    '@component-background': '#fff', //white
                    '@font-family': 'Nunito, sans-serif',
                    '@icon-color': '#ff914d' //orange

                },
                javascriptEnabled: true,
            },
            },
            },
        },
    ],
};