// @see http://nodejs.org/api/all.html#all_require_extensions

var supportedExtensions = {
  'json': 'require-json' 
  , 'yaml': 'require-yaml'
  , 'csv': 'require-csv'
};

module.exports = function (extensions) {
  if (!(extensions instanceof Array)) {
    extensions = extensions.split(/ +/);
  }
  extensions.forEach(function (extension) {
    if (!supportedExtensions.hasOwnProperty(extension)) {
      throw new Error('Extension ' + extension + ' is not supported at the moment.');
    }
    require(supportedExtensions[extension]);
  });
}
