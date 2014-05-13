UPS SDK for Node.js
===================

Simple convenience wrapper for the SOAP version of the UPS APIs. 

This package makes your life slightly easier by:

* Returning native errors from parsed XML
* Bundling the required WSDLs
* Takes care of authentication

Install by running `npm install ups-sdk` (soon).

Usage
-----

```js
var upsPickup = require('ups-sdk').pickup(username, password, accessToken);

var args = {
  PickupAddress: {
    AddressLine: 'Teststrasse 123',
    City: 'Berlin',
    StateProvince: 'Brandenburg',
    ResidentialIndicator: 'N',
    PostalCode: '12345',
    CountryCode: 'DE'
  },
  ServiceDateOption: '03', //A Specific-Day Pickup
  PickupDateInfo: {
    ReadyTime: '1000',
    CloseTime: '1800',
    PickupDate: '20140510'
  }
};

upsPickup.rate(args, function(err, result) {
  if(err) {
    throw err;
  }
  console.log(result);
});
```

Supported APIs
--------------
* [Pickup](https://developerkitcommunity.ups.com/index.php/Pickup_Package_Web_Services_Developers_Guide_-_December_30,_2013)

Documentation
-------------
For documentation and support of the UPS APIs, please refer to the [UPS Developer Kit](https://www.ups.com/upsdeveloperkit/) or [UPS Developer Kit Community](https://developerkitcommunity.ups.com/).

Todo
----
* Test/production flag
* Add more APIs, at first the shipping API
* Input validation from the WSDL
* More error classes (for transient and hard errors)

Disclaimer
----------
This package is not developed nor endorsed by UPS, the trademark UPS is owned by United Parcel Service of America, Inc.

License
-------
The MIT License (MIT)

Copyright (c) 2013 Joel Arvidsson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
