const webpack = require('webpack')
require('dotenv').config()

module.exports = {
  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'PERSONAL_ACCESS_TOKEN': JSON.stringify(process.env.PERSONAL_ACCESS_TOKEN)
        }
      })
  ]
}
