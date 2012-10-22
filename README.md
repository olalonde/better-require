`require('better-require')('json yaml')` lets you load JSON and YAML files
using require syntax. For example: `var config = require('./config.json');` 

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

# Reference

http://nodejs.org/api/all.html#all_require_extensions
