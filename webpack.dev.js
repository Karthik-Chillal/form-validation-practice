// Development webpack configuration
// Sets up development mode with dev server and source maps

import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // Set mode to development for better debugging
  mode: 'development',
  // Entry point
  entry: './src/index.js',
  // Output configuration
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  // Source map for debugging
  devtool: 'eval-source-map',
  // Dev server configuration
  devServer: {
    watchFiles: ['./src/template.html'],
  },
  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  // Module rules
  module: {
    rules: [
      // CSS handling
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // HTML handling
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      // Image assets
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
