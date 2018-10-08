const weatherAPI = require('../weatherAPI');
const router = require('express').Router();
const request = require('request');

const url = weatherAPI.url;

router.route('/search/:zip')
	.get((req, res) => {
		console.log('REQ', req.params.zip)
	})

module.exports = router;