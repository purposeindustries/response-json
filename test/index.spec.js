'use strict';

var responseJSON = require('../index.js');

describe('response-json', function () {

  it('should return the responseJSON', function () {
    var mockXhr = {
      responseJSON: {
        a: 'A'
      }
    };
    responseJSON(mockXhr).should.eql(mockXhr.responseJSON);
  });

  it('should return the parsed responseText', function () {
    var mockXhr = {
      responseText: '{"b":"B"}'
    };
    responseJSON(mockXhr).should.eql({
      b: 'B'
    });
  });

  it('should return false in the case of invalid input', function () {
    var mockXhr = {
      responseText: 'wrong input'
    };
    responseJSON(mockXhr).should.be.false;
  });

  it('should return false if the argument is undefined', function () {
    responseJSON().should.be.false;
  });

});
