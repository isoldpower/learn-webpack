import {BuildOptions} from "../types/types";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import webpack from "webpack";
import {Configuration} from "mini-css-extract-plugin";

export function buildGlobalPlugins(options: BuildOptions): Configuration['plugins'] {
    const htmlPlugin = new HtmlWebpackPlugin({
        template: options.paths.html,
        favicon: path.resolve(options.paths.public, 'favicon.ico'
    )});
    const definePlugin = new webpack.DefinePlugin({
        __PLATFORM__: JSON.stringify(options.platform),
    })

    return [
        htmlPlugin,
        definePlugin
    ];
}