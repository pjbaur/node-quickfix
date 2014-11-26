var df = require('dateformat')
var quickfix = require('../index');
var options = {
  credentials: {
    username: "USERNAME",
    password: "PASSWORD"
  }
};

var fixClient = quickfix.initiator("./nodeQuickfixInitiatorExample.properties", options);

fixClient.start(function() {
	console.log("FIX Initiator Started")
  var order = {
    header: {
      8: 'FIX.4.4',
      35: 'D',
      49: "NODEQUICKFIX",
      56: "ELECTRONIFIE"
    },
    tags: {
      11: "0E0Z86K00000",
      48: "06051GDX4",
      22: 1,
      38: 200,
      40: 2,
      54: 1,
      55: 'BAC',
      218: 100,
      60: df(new Date(), "yyyymmdd-HH:MM:ss.l"),
      423: 6
    }
  };

  fixClient.send(order, function() {
    console.log("Order sent!");
  });
});

