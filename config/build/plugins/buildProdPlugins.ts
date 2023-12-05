import MiniCssExtractPlugin, {Configuration} from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";
import path from "path";
import {BuildOptions} from "../types/types";

export function buildProdPlugins(options: BuildOptions): Configuration['plugins'] {
    const plugins: Configuration['plugins'] = [];

    plugins.push(new MiniCssExtractPlugin({
        filename: 'css/[name]-[contenthash:8].css',
        chunkFilename: 'css/[name]-[contenthash:8].css',
    }));

    plugins.push(new CopyPlugin({
        patterns: [
            {
                from: path.resolve(options.paths.public, 'locales'),
                to: path.resolve(options.paths.output, 'locales')
            }
        ]
    }));

    return plugins;
}