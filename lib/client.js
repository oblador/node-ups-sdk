var soap = require('soap');
var util = require('util');
var UPSError = require('./error');

var UPSClient = module.exports = function (options) {
  var self = this;

  var authHeader = {
    UPSSecurity: {
      UsernameToken: {
        Username: options.username,
        Password: options.password
      },
      ServiceAccessToken: {
        AccessLicenseNumber: options.accessKey
      }
    }
  };

  this.createClient = function(cb) {
    soap.createClient(options.wsdlUrl, function(err, client) {
      if(client) {
        client.addSoapHeader(authHeader, 'UPSSecurity', 'upss', 'http://www.ups.com/XMLSchema/XOLTWS/UPSS/v1.0');
      }
      return cb(err, client);
    });
  };

  this.wrapMethod = function(methodName) {
    return function(args, cb) {
      self.createClient(function(err, client) {
        if(err) {
          return cb(err);
        }
        client[options.serviceName][options.portName][methodName](args, function(err, res) {
          if(err) {
            return cb(new UPSError(err.body));
          }
          cb(err, res);
        });
      });
    };
  };

  //Add convenience methods to turn client.PickupService.PickupPort.ProcessPickupRate into this.rate
  options.methods.forEach(function(methodName) {
    self[methodName] = self.wrapMethod(methodName);
    if(methodName.indexOf(options.methodPrefix) === 0) {
      var shorthand = methodName.substring(options.methodPrefix.length);
      shorthand = shorthand.substring(0, 1).toLowerCase() + shorthand.substring(1);
      self[shorthand] = self[methodName];
    }
  });
};
