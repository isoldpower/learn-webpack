import {BuildOptions} from "../types/types";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {buildCssModulesLoader} from "./buildCssModulesLoader";

export function buildSassLoader(options: BuildOptions){
    const isDevelopment = options.mode === 'development';
    const cssModulesLoader = buildCssModulesLoader(options);

    return {
        test: /\.s[ac]ss$/i,
        use: [
             isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssModulesLoader,
            'sass-loader'
        ],
        exclude: /node_modules/,
    };
}