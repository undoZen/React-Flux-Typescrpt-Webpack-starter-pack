import * as path from 'path'
import * as webpack from 'webpack'

const projectRootPath = path.resolve(__dirname, '../')
const assetsPath = path.resolve(projectRootPath, './dist/static')

const config: webpack.Configuration = {
  context: path.resolve(__dirname, ".."),
  resolve: {
      extensions: ['*', '.webpack.js', '.web.js', '.jsx', '.ts', '.tsx', '.js']
  },
  entry: {
      main: './src/main.tsx'
  },
  devtool: "#source-map",
  output: {
      path: assetsPath,
      publicPath: '/static/',
      filename: 'bundle.js',
      sourceMapFilename: '[name].[chunkhash].map'
  },
  module: {
      loaders: [
        {test: /\.tsx?$/, loader: 'awesome-typescript-loader'}
      ]
  },
}

export default config
