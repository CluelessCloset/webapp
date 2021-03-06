var Client = require('../models/client.module');

exports.postClients = function(req, res) {
  var client = new Client();

  client.name = req.body.name;
  client.id = req.body.id;
  client.secret = req.body.secret;
  client.userId = req.user._id;

  client.save(function(err) {
    if (err)
      return res.send(err);

    return res.json({ message: 'Client Added', data: client });
  });
};

// Set an endpoint to find clients
exports.getClients = function(req, res) {
  Client.find({ userId: req.user._id }, function(err, clients) {
    if (err)
      return res.send(err);

    return res.json(clients);
  });
};
