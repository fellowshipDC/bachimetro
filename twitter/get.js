var request = require('request');

var oauthOptions = {
  url: 'https://api.twitter.com/1.1/search/tweets.json?q=%23baches&result_type=recent',
  headers: {'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANxN3QAAAAAASPfkYaEsbzos4GzCvdR9tLQV%2BXU%3DZ9rsMl6Fy4U9VvpauaMFDKBLr2ViBHy2QFQxlJuVEgw0ZAZYR1', 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
};

request.get(oauthOptions, function(e, r, body) {
  console.log(body)
});
/*
    consumer_key: 'yAXoXCoZvZZUmUWs0p2GTNH2s',
    consumer_secret: 'vp0y26xc1HhWVmIsFTAzEDAoEGzhtzVUsJw3hGY2xJ4ohbzKrp',
    access_token_key: '1054591028-Ne272TsQw6lUtw6VLJt2CY0zic21YLr7MUrCRPx',
    access_token_secret: '0usi86t3E5wZH1WaZ2nULZ62kfmTrZzAAUe5iEIlczTGF'     
*/