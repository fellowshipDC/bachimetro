var request = require('request');
var consumer_key = 'yAXoXCoZvZZUmUWs0p2GTNH2s';
var consumer_secret = 'vp0y26xc1HhWVmIsFTAzEDAoEGzhtzVUsJw3hGY2xJ4ohbzKrp';
var enc_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');

var oauthOptions = {
  url: 'https://api.twitter.com/oauth2/token',
  headers: {'Authorization': 'Basic ' + enc_secret, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  body: 'grant_type=client_credentials'
};

request.post(oauthOptions, function(e, r, body) {
  console.log(body)
});
/*
    consumer_key: 'yAXoXCoZvZZUmUWs0p2GTNH2s',
    consumer_secret: 'vp0y26xc1HhWVmIsFTAzEDAoEGzhtzVUsJw3hGY2xJ4ohbzKrp',
    access_token_key: '1054591028-Ne272TsQw6lUtw6VLJt2CY0zic21YLr7MUrCRPx',
    access_token_secret: '0usi86t3E5wZH1WaZ2nULZ62kfmTrZzAAUe5iEIlczTGF'     
*/