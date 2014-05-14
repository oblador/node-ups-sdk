var UPSClient = require('./client');
var wsdlUrl = __dirname + '/../schemas/Pickup.wsdl';

module.exports = function (options) {
  if(!options.wsdlUrl) {
    options.wsdlUrl = __dirname + '/../schemas/Pickup.wsdl';
  }
  options.endpoint = 'https://' + (options.testing ? 'wwwcie' : 'onlinetools') + '.ups.com/webservices/Pickup';
  options.methodPrefix = 'ProcessPickup';
  options.methods = 'ProcessPickupCreation ProcessPickupGetServiceCenterFacilities ProcessPickupRate ProcessPickupCancel ProcessPickupPendingStatus'.split(' ');
  options.serviceName = 'PickupService';
  options.portName = 'PickupPort';
  return new UPSClient(options);
};
