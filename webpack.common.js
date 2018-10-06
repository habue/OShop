const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
        sourceMapFilename: "bundle.map"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                use: ['file-loader',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug: true,
                    },
                  },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: () => [require('autoprefixer')]
                    }
                }]
            }
        ]
    },
    performance: {
        hints: false
    }
}