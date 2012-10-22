require('../')('json yaml');
var configJSON = require('./config.json');
var configYAML = require('./config.yaml');
console.log('config.json:');
console.log(configJSON);
console.log('config.yaml:');
console.log(configYAML);
