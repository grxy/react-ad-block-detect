const config = {
    devtool: 'source-map',
    entry: 'index',
    externals: ['react'],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader?cacheDirectory'
            }
        ]
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        path: './dist',
        sourceMapFilename: '[file].map'
    },
    resolve: {
        extensions: ['.js'],
        modules: [
            'node_modules',
            './src'
        ]
    }
};

export default config;
