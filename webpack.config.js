
module.exports = {
  entry: './frontend/App.jsx',

  output: {
    path: __dirname + '/src/main/resources/public/js',
    filename: 'corecompiled.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  
  module: {
    rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader']
    }
  ]
}
};