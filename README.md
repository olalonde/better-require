Augments require() with support for multiple file formats.

Supported file types are: `json`, `yaml`, `csv`, `xml`, `ini`.

# Install

    npm install better-require

# Usage

```javascript
/**
 * @param {String} formats is a white space separated list of formats you would like require() to support.
 */
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
