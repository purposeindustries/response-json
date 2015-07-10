# response-json [![Build Status](https://travis-ci.org/purposeindustries/response-json.svg?branch=master)](https://travis-ci.org/purposeindustries/response-json)

> Attempts to get a json object back from an xhr object.

## Install

```sh
$ npm install response-json
```

## Usage

```js

var $ = require('jquery');
var responseJSON = require('response-json');

$.ajax({
    // generates 500 server error and returns '{"body": "Oops, something went wrong. :("}'
    url: 'http://example.com/get-some-json',
    error: function (xhr) {
        var msg = responseJSON(xhr);
        console.log(msg.body); // output: Oops, something went wrong. :(
    }
});

```
## Test

```sh
$ npm test
```

## License

[MIT](LICENSE) &copy; Purpose Industries
