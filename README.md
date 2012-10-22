Adds file formats to require(). 

Supported file types are: `json`, `yaml`, `csv`.

# Install

    npm install better-require

# Example 

```javascript
require('better-require')('json yaml');
var config = require('./config.json');
var configYaml = require('./config.yaml');
console.log(config);
console.log(configYaml);
```

# Dependencies

- [require-json](https://github.com/olalonde/require-json)
- [require-yaml](https://github.com/olalonde/require-yaml)
- [require-csv](https://github.com/olalonde/require-csv)

# Reference

http://nodejs.org/api/all.html#all_require_extensions
