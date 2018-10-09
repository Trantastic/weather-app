const weatherAPI = require('../weatherAPI');
const router = require('express').Router();
const request = require('request');

const url = weatherAPI.url;

router.route('/search/:zip')
	.get((req, res) => {
		request(url + req.params.zip, (error, response, body) => {
			if(error) {
				console.log('ERROR: ', error);
			}
			console.log(JSON.parse(body).main.temp)
			res.json(JSON.parse(body).main.temp);
		})
	})

module.exports = router;