

module.exports = {
  entry: './frontend/App.jsx',

  output: {
    path: './src/main/resources/public/js/',
    filename: 'corecompiled.js'
  },
  
  module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
};