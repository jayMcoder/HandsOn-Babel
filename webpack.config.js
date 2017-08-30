/*
* Webpack configuration for babel
* Uses babel-loader
* Entry point set to main.js 
* Webpack traverses and creates
* single bundle.js file in 
* dist/webpack folder
*/

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: 'dist/webpack',
    filename: 'bundle.js'
  },
  module:{
    loaders:[
      {test: /\.js$/, exclude: /node_modules/,
        loader: 'babel-loader'}
    ]
  }
}
