const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withFonts(
  withImages({
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'static/images/[name].[hash].[ext]',
            },
          },
        ],
      });
      return config;
    },
  })
);