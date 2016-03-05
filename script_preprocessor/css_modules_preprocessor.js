var babel = require('babel-jest');

module.exports = {
  process: function (src, filename) {
    if (/\.(css|scss)$/.test(filename)) {
      return '';
    } else {
      return babel.process(src, filename);
    }
  }
};
