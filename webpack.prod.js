// Production webpack configuration
// Optimized for production builds with minification

import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // Set mode to production for optimizations
  mode: 'production',
  // Entry point
  entry: './src/index.js',
  // Output configuration
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },
  // Source map (though in prod, might not be needed, but keeping for now)
  devtool: 'eval-source-map',
  // Dev server (probably not used in prod, but included)
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
