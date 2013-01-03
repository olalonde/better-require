Augments require() with support for multiple file formats.

# Supported file formats
 
**... which return a JSON representation:**

- [json](http://en.wikipedia.org/wiki/JSON)
- [yaml](http://en.wikipedia.org/wiki/Yaml) (.yaml, .yml)
- [csv](http://en.wikipedia.org/wiki/Comma-separated_values) 
- [xml](http://en.wikipedia.org/wiki/Xml)
- [ini](http://en.wikipedia.org/wiki/INI_file)

**... which return a Javascript module:**

- [coffeescript](http://coffeescript.org) (.coffeescript, .coffee)
- [six](https://github.com/matthewrobb/six)
- [clojurescript](https://github.com/clojure/clojurescript) (.cljs) - not bundled
- [dart](http://www.dartlang.org/) - not bundled
- [typescript](http://www.typescriptlang.org/) (.ts) - not bundled

**... work in progress:**

- dynamic libraries
- ruby
- python

Behind the scenes, this module adds handlers to [require.extensions](http://nodejs.org/api/all.html#all_require_extensions).

# Install

    npm install better-require

# Usage

```javascript
/**
 * @param {String} optional - formats is a white space separated list of formats you would like require() to support.
 */
// support all available extensions
require('better-require')();
// support a subset of extensions
require('better-require')(formats);
```

# Example 

Enable support for all file types:

```javascript
require('better-require')();

var config = require('./config.json');
console.log(config);
```

Enable support for only a subset of file types:

```javascript
require('better-require')('json yaml xml');

// we can now require .xml, .yaml and .xml files!
var config = require('./config.yaml');
console.log(config);
```

# Dependencies

- [require-json](https://github.com/olalonde/require-json)
- [require-yaml](https://github.com/olalonde/require-yaml)
- [require-csv](https://github.com/olalonde/require-csv)
- [require-xml](https://github.com/olalonde/require-xml)
- [require-ini](https://github.com/olalonde/require-ini)
- see package.json

# Reference

http://nodejs.org/api/all.html#all_require_extensions
