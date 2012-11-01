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
      console.log(extension);
      require.extensions['.' + extension] = function(module, filename) {
        var err = new Error(format.require + ' is quite a heavy package and better-require does not install it by default.'
                       + '\n'
                       + 'You will need to `npm install ' + format.require  + '` before you can require ' + filename + '.');
        throw err;
      };
    });
  }
}
