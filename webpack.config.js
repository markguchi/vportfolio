const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                      },
                },
            },
            {
                test: /\.css$/,  // Match CSS files
                use: ['style-loader', 'css-loader'],  // First inject CSS into DOM, then resolve CSS imports
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i, // Match image files
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[hash].[ext]', // Generates file with unique hash for cache busting
                      outputPath: 'images/', // Output directory for images
                    },
                  },
                ],
              },
              {
                test: /\.(mp4|webm|ogg)$/i,  // Match video files
                use: [
                  {
                    loader: 'file-loader',  // Handle video files
                    options: {
                      name: '[name].[hash].[ext]', // File name pattern with hash for cache-busting
                      outputPath: 'videos/',  // Directory where the video will be stored
                    },
                  },
                ],
              },
              {
                test: /\.pdf$/i,  // Match .pdf files
                use: [
                  {
                    loader: 'file-loader',  // Or 'url-loader' for smaller PDFs
                    options: {
                      name: '[name].[hash].[ext]', // Generates unique file names
                      outputPath: 'pdfs/', // Directory where PDFs will be stored
                    },
                  },
                ],
              },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.mp4', '.pdf', '.png', '.jpeg', '.jpg'],
        fallback: {
            fs: false
        },
    },
};