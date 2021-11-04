// next.config.js
const withCSS = require('@zeit/next-css')
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
const path = require("path");

//module.exports = withCSS({/* my next config */

    // assetPrefix: process.env.BASE_PATH || '',
    // baseUrl: process.env.NODE_ENV === "development" ? "" : "issuer",
    // publicRuntimeConfig: {
    //     basePath: process.env.BASE_PATH || '',
    //   }

// })

module.exports = withPlugins([[withImages]], {
    webpack(config, options) {
        config.resolve.modules.push(path.resolve("./"));
        return config;
    },
});