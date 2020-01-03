/*
 * @moduleName:
 * @Author: dawdler
 * @LastModifiedBy: dawdler
 * @Date: 2019-01-30 16:02:54
 * @LastEditTime: 2019-12-24 14:06:39
 */
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
// 计算路径
const resolve = function (dir) {
    return path.join(__dirname, '..', dir);
};
const resolveLoc = function (dir) {
    return path.join(__dirname, '.', dir);
};
const GOVERN_HOST = process.env.VUE_APP_GOVERN_HOST;
console.log('--------------do-------------');
// ===== vue-li3配置
module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    chainWebpack: config => {
        // 修复HMR
        config.resolve.symlinks(true);
        config.resolve.alias
            .set('less@', resolve('../assets/less/'))
            .set('javascript@', resolve('../javascript/'))
            .set('modules@', resolve('../modules/'))
            .set('components@', resolve('../components/'))
            .set('localJs@', resolveLoc('./src/javascript/'))
            .set('localModules@', resolveLoc('./src/modules/'))
            .set('localComponents@', resolveLoc('./src/components/'));
        config
            .when(isProduction,
                config => {
                    config
                        .plugin('ScriptExtHtmlWebpackPlugin')
                        .after('html')
                        .use('script-ext-html-webpack-plugin', [{
                            // `runtime` must same as runtimeChunk name. default is `runtime`
                            inline: /runtime\..*\.js$/
                        }])
                        .end();
                    config
                        .optimization.splitChunks({
                            chunks: 'all',
                            cacheGroups: {
                                libs: {
                                    name: 'chunk-libs',
                                    test: /[\\/]node_modules[\\/]/,
                                    priority: 10,
                                    chunks: 'initial' // only package third parties that are initially dependent
                                },
                                elementUI: {
                                    name: 'chunk-elementUI', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                                },
                                antv: {
                                    name: 'chunk-antv', // split elementUI into a single package
                                    priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                                    test: /[\\/]node_modules[\\/]_?@antv(.*)/ // in order to adapt to cnpm
                                },
                                commons: {
                                    name: 'chunk-commons',
                                    test: resolve('../components/'), // can customize your rules
                                    minChunks: 3, //  minimum common number
                                    priority: 5,
                                    reuseExistingChunk: true
                                }
                            }
                        });
                    config.optimization.runtimeChunk('single');
                });
    },
    configureWebpack: config => {
        config.externals = {
            vuex: 'Vuex'
        };
        if (isProduction) {
            config.plugins.push(
                new OptimizeCSSAssetsPlugin({
                    assetNameRegExp: /\.css$/g,
                    cssProcessor: require('cssnano'),
                    cssProcessorPluginOptions: {
                        preset: ['default', {
                            discardComments: {
                                removeAll: true
                            },
                            normalizeUnicode: false
                        }]
                    },
                    canPrint: true
                })
            );
            config.plugins.push(
                new CompressionWebpackPlugin({
                    filename: '[path].gz[query]',
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + ['js', 'css', 'html', 'ico', 'svg', 'ttf', 'woff', 'woff2', 'eot', 'png', 'jpg', 'jpeg'].join('|') + ')$'),
                    threshold: 10240,
                    minRatio: 0.8
                })
            );
        }
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: false,
        // 开启 CSS source maps?
        sourceMap: true
    },
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        port: 2222,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            [GOVERN_HOST]: {
                target: 'http://10.0.11.137:23456',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + GOVERN_HOST]: [GOVERN_HOST]
                }
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {}
};
