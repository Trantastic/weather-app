const weatherAPI = require('../weatherAPI');
const router = require('express').Router();
const request = require('request');

const url = weatherAPI.url;

router.route('/search/:zip')
	.get((req, res) => {
		url = JSON.stringify(url + req.params.zip);
		// console.log(JSON.stringify(url + req.params.zip))
		request('https://api.openweathermap.org/data/2.5/weather?APPID=18d1f1f1d028e3a40481786d7404c7d3&zip=95112', (error, response, body) => {
			if(error) {
				console.log('ERROR: ', error);
			}
			console.log(JSON.parse(body).main.temp)
		})
	// 	// console.log('REQ', req.params.zip)
	})

module.exports = router;