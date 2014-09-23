var util = require('util');
var xpath = require('xpath.js');
var dom = require('xmldom').DOMParser;

var UPSError = function(errorBody) {
  Error.captureStackTrace(this, this.constructor);
  var doc = new dom().parseFromString(errorBody);
  var select = xpath.useNamespaces({ 'err': 'http://www.ups.com/XMLSchema/XOLTWS/Error/v1.1' });

  var getNodeValue = function(tagName) {
    var nodes = select('//err:' + tagName + '/text()', doc);
    if(nodes[0]) {
      return nodes[0].nodeValue;
    }
  };

  this.message = getNodeValue('Description');
  this.errorCode = getNodeValue('Code');
  this.severity = getNodeValue('Severity');
};
util.inherits(UPSError, Error);

module.exports = UPSError;
