const { merge } = require("webpack-merge");

module.exports = {
  /**
   * Enable webpack@^5
   *
   * @see {@link https://nextjs.org/docs/messages/webpack5}
   */
  // future: {
  //   webpack5: true,
  // },

  /**
   * Customize the Webpack configuration.
   *
   * @see {@link https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config}
   */
  webpack(config, { dev }) {
    if (dev) {
      return config;
    }

    /**
     * Combine all CSS into a single file.
     *
     * @see {@link https://github.com/webpack-contrib/mini-css-extract-plugin#extracting-all-css-in-a-single-file}
     */
    return merge(config, {
      optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: "styles",
              // For webpack@5
              // test: /\.css$/,
              // For webpack@4
              test: /\.css$/,
              chunks: "all",
              enforce: true,
            },
          },
        },
      },
    });
  },
};
