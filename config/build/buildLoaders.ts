import webpack from "webpack";
import {BuildOptions} from "./types/types";
import {buildBabelLoader} from "./loaders/buildBabelLoader";
import {buildSvgLoader} from "./loaders/buildSvgLoader";
import {buildSassLoader} from "./loaders/buildSassLoader";
import {buildAssetLoader} from "./loaders/buildAssetLoader";

export function buildLoaders(options: BuildOptions): webpack.ModuleOptions['rules'] {

    const assetLoader = buildAssetLoader(options);
    const svgLoader = buildSvgLoader(options);
    const babelLoader = buildBabelLoader(options);
    const sassLoader = buildSassLoader(options);

    return [
        assetLoader,
        babelLoader,
        sassLoader,
        svgLoader,
    ];
}