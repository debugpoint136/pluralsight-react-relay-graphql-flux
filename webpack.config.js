module.exports = {
    entry: "./src/js/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },

    module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: ['babel'],
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}