/*
 * @moduleName:
 * @Author: dawdler
 * @LastModifiedBy: dawdler
 * @Date: 2019-01-30 16:02:54
 * @LastEditTime: 2019-11-05 14:34:51
 */
const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
// 计算路径
const resolve = function (dir) {
    return path.join(__dirname, '..', dir);
};
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
    },
    configureWebpack: config => {
        if (isProduction) {
            config.plugins.push(
                new UglifyJsPlugin({
                    uglifyOptions: {
                        compress: {
                            drop_debugger: true
                        },
                        mangle: false,
                        output: {
                            beautify: true // 压缩注释
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            );
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
    // use thread-loader for babel & TS in production build
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        port: 9999,
        proxy: {
            '/scheduler': {
                target: 'http://10.0.11.137:8889',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/scheduler': '/scheduler' // 代理的路径
                }
            }
        }
    },
    // 第三方插件配置
    pluginOptions: {}
};
