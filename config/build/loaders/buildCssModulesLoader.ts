import {BuildOptions} from "../types/types";

export function buildCssModulesLoader(options: BuildOptions) {
    const isDevelopment = options.mode === 'development';

    return {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64:8]',
            },
        },
    }
}