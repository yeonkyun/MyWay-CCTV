const path = require('path');

module.exports = {
  // ... 다른 설정들
  resolve: {
    fallback: {
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "fs": false,
      "http": require.resolve("stream-http"),
      "net": false,
      "stream": require.resolve("stream-browserify"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/")
    }
  }
};
