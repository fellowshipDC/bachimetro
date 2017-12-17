var express = require('express');
var router = express.Router();
var unirest = require('unirest');

/* GET users listing. */
router.get('/', function(req, res, next) {
    unirest.get('https://api.twitter.com/1.1/search/tweets.json?q=baches&geocode=19.4286973,-99.156051,100km')
    .headers({'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAANxN3QAAAAAASPfkYaEsbzos4GzCvdR9tLQV%2BXU%3DZ9rsMl6Fy4U9VvpauaMFDKBLr2ViBHy2QFQxlJuVEgw0ZAZYR1'})
    .end(function (response) {
        res.json(response);
    });
});

module.exports = router;
