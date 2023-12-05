import {Configuration} from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {BuildOptions} from "./types/types";
import {buildDevPlugins} from "./plugins/buildDevPlugins";
import {buildProdPlugins} from "./plugins/buildProdPlugins";
import {buildGlobalPlugins} from "./plugins/buildGlobalPlugins";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDevelopment = options.mode === 'development';
    const isProduction = options.mode === 'production';

    let plugins = buildGlobalPlugins(options);

    if(isDevelopment) plugins = plugins.concat(buildDevPlugins(options));
    if(isProduction) plugins = plugins.concat(buildProdPlugins(options));

    if(options.analyzer) plugins.push(new BundleAnalyzerPlugin());

    return plugins;
}