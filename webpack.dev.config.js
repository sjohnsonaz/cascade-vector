module.exports = {
    mode: 'development',
    entry: {
        'vector': ['./src/scripts/modules/Vector.ts'],
        'main': './src/tests/demo/scripts/main.ts',
        'mochaRunner': './src/mocha/BrowserRunner.ts'
    },
    output: {
        filename: './bundle/[name].js',
        libraryTarget: 'var',
        library: '[name]'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    externals: {
        mocha: 'mocha',
        chai: 'chai'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: ['ts-loader']
        }]
    }
};
