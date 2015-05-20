'use strict';

var path = require('path');

module.exports = function (relativePath) {
  return require(
    path.join(
      path.dirname(require.main.filename),
      relativePath
    )
  );
};