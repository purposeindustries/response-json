```js
// jQuery example

var $ = require('jquery');
var responseJSON = require('response-json');

$.ajax({
    // generates 500 server error and returns '{"body": "Oops, something went wrong. :("}'
    url: 'http://example.com/get-some-json', 
    error: function (xhr) {
        var msg = responseJSON(xhr);
        
        console.log(msg.body);
        
        // output: Oops, something went wrong. :(
    }
});
```
