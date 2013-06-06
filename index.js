var path = require('path'),
  util = require('util');
require('colors');
// @see http://nodejs.org/api/all.html#all_require_extensions

// first value of `extensions` property should be an extension the require registers
// aliases & extensions can also be used when calling require('better-require')(formats)
var supportedFormats = {
  'json': {
    require: 'require-json'
  }
  , 'yaml': {
    require: 'require-yaml'
    , extensions: ['yaml', 'yml']
  }
  , 'csv': {
    require: 'require-csv'
  }
  , 'xml': {
    require: 'require-xml'
  }
  , 'ini': {
    require: 'require-ini'
  }
  , 'coffeescript': {
    require: 'coffee-script'
    , extensions: ['coffee']
    , aliases: ['coffee-script']
  }
  , 'six': {
    require: 'six'
  }
  , 'clojurescript': {
    require: 'clojure-script'
    , aliases: 'clojure-script'
    , extensions: 'cljs'
    , bundled: false
    , url: 'https://github.com/michaelsbradleyjr/node-clojurescript'
  }
  , 'dart': {
    require: 'Frog'
    , extensions: 'dart'
    , bundled: false
    , install: 'You will also need to install the Dart SDK http://www.dartlang.org/docs/getting-started/sdk/#download.'
    , url: 'https://github.com/kaisellgren/Frog/'
  }
  , 'typescript': {
    require: 'require-typescript'
    , extensions: ['ts']
  }
};

module.exports = function (formats) {
  formats = formats || Object.keys(supportedFormats);

  if (!(formats instanceof Array)) {
    formats = formats.split(/ +/);
  }

  // # Format supportedFormats
  for (var key in supportedFormats) {
    var supportedFormat = supportedFormats[key];
    supportedFormat.name = supportedFormat.name || key;
    // ## Populate .extensions
    supportedFormat.extensions = supportedFormat.extensions || [];
    // string -> [string]
    if (typeof supportedFormat.extensions === 'string')
      supportedFormat.extensions = [supportedFormat.extensions];
    // add key to extensions
    if (supportedFormat.extensions.indexOf(key) === -1)
      supportedFormat.extensions.push(key);
    // ## Populate .aliases
    supportedFormat.aliases = supportedFormat.aliases || [];
    // string -> [string]
    if (typeof supportedFormat.aliases === 'string')
      supportedFormat.aliases = [supportedFormat.aliases];
    // add extensions to aliases
    supportedFormat.aliases = supportedFormat.aliases.concat(supportedFormat.extensions);
    // ## Populate install
    var install = supportedFormat.install || '';

    supportedFormat.install = function (filename) {
      var filename = path.basename(filename);
      return supportedFormat.name
      + ' depends on a heavy package and better-require does not install it by default. '
      + 'You need to install it by yourself before you can require ' + filename.grey + ':'
      + '\n\n'
      + ('npm install ' + supportedFormat.require  + '').blue
      + '\n\n'
      + (install ? install + ' ' : '')
      + (supportedFormat.url ? 'More install information at ' + supportedFormat.url : '')
      + '\n\n';
    }
  }

  for (var key in supportedFormats) {
    var supportedFormat = supportedFormats[key];
    formats.forEach(function (format) {
      if (supportedFormat.aliases.indexOf(format) !== -1) {
        requireFormat(supportedFormat);
      }
    });
  };
}

function requireFormat (format) {
  try {
    require(format.require);
  }
  catch (e) {
    format.extensions.forEach(function (extension) {
      require.extensions['.' + extension] = function(module, filename) {
        var err = new Error(format.install(filename));
        throw err;
      };
    });
  }
}
