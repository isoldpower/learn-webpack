import {BuildOptions} from "../types/types";
import {removeAttributePlugin} from "../babel/removeAttributePlugin";

export function buildBabelLoader(options: BuildOptions) {
    const isDevelopment = options.mode === 'development';
    const isProduction = options.mode === 'production';

    const plugins = [];
    if(isProduction){
        plugins.push([removeAttributePlugin, {props: ['data-testid']}]);
    }

    return {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options:{
                presets: [
                    "@babel/preset-env",
                    "@babel/preset-typescript",
                    ["@babel/preset-react", {runtime: isDevelopment ? "automatic" : "classic"}]
                ],
                plugins: plugins.length ? plugins : undefined,
            }
        }
    }
}