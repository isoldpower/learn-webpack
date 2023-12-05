import {BuildOptions} from "../types/types";

export function buildAssetLoader(options: BuildOptions) {
    return {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
    }
}