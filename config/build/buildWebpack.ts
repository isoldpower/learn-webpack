import webpack from "webpack";
import {BuildOptions} from "./types/types";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpack (options: BuildOptions): webpack.Configuration {
    const isDevelopment = options.mode === 'development';
    const {mode, paths} = options;

    return {
        mode: mode,
        entry: {
            main: paths.entry,
        },
        output: {
            path: paths.output,
            filename: '[name]-[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        devtool: isDevelopment ? 'eval-cheap-module-source-map' : 'source-map',
        devServer: isDevelopment ? buildDevServer(options) : undefined,
    }
}