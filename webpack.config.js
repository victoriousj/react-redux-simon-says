module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /\.mp3$/],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
    },
    {
        test: /\.(mp3|flac)$/,
        // include: SRC,
        loader: 'file-loader'
    }
    ]
  }
};