var Client = require('node-rest-client').Client,
    geoip = require('geoip-lite');


exports.getWeather = function(req, res) {
    var client = new Client();
    var geo;

    req.body.long = -33;
    req.body.lat = 123;

    if (req.body.long == null) {
        geo = geoip.lookup(req.connection.remoteAddress);
        console.log(req.connection.remoteAddress, geo);
        req.body.long = geo.ll[0];
        req.body.lat  = geo.ll[1];
    }

    client.get("https://api.darksky.net/forecast/536e8e8ebec110834c39913a1bfbd275/"
        +req.body.long+","+req.body.lat+"", function (data, response) {
        var rain = (data.daily.data[1].precipProbability < 42)? false : true;
        var temperature = ((data.daily.data[1].apparentTemperatureHigh + data.daily.data[1].apparentTemperatureLow) / 20);


        return res.json({'rain': rain, 'temperature': temperature});
    });
}
