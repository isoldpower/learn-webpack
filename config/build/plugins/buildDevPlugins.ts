import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import {BuildOptions} from "../types/types";
import {Configuration} from "mini-css-extract-plugin";

export function buildDevPlugins(options: BuildOptions): Configuration['plugins']  {
    const plugins: Configuration['plugins'] = [];

    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());

    return plugins;
}