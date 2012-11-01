Augments require() with support for multiple file formats.

# Supported file formats
 
**... which return a JSON represenation:**

- [json](http://en.wikipedia.org/wiki/JSON)
- [yaml](http://en.wikipedia.org/wiki/Yaml)
- [csv](http://en.wikipedia.org/wiki/Comma-separated_values)
- [xml](http://en.wikipedia.org/wiki/Xml)
- [ini](http://en.wikipedia.org/wiki/INI_file)

**... which return a Javascript module:**

- [coffeescript](http://coffeescript.org)
- [six](https://github.com/matthewrobb/six)

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

```javascript
require('better-require')('json');

var config = require('./config.json');
console.log(config);
```

Enable support for mutliple file types:

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

# Reference

http://nodejs.org/api/all.html#all_require_extensions
