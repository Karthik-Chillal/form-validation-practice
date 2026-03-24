// Common webpack configuration shared between dev and prod
// Sets up entry point, output, plugins, and module rules

import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // Entry point for the application
  entry: './src/index.js',

  // Output configuration: filename and path for bundled files
  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },

  // Plugins array: HtmlWebpackPlugin to generate HTML from template
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],

  // Module rules for handling different file types
  module: {
    rules: [
      // Rule for CSS files: use style-loader and css-loader
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Rule for HTML files: use html-loader
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      // Rule for image files: treat as asset/resource
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
