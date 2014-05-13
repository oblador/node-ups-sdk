var UPSClient = require('./client');
var wsdlUrl = __dirname + '/../schemas/Pickup.wsdl';

module.exports = function (username, password, accessKey) {
  var options = {
    username:     username, 
    password:     password, 
    accessKey:    accessKey,
    wsdlUrl:      __dirname + '/../schemas/Pickup.wsdl',
    methodPrefix: 'ProcessPickup',
    methods: 'ProcessPickupCreation ProcessPickupGetServiceCenterFacilities ProcessPickupRate ProcessPickupCancel ProcessPickupPendingStatus'.split(' '), 
    serviceName:  'PickupService',
    portName:     'PickupPort'
  };
  return new UPSClient(options);
};
