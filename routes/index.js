const weatherAPI = require('../weatherAPI');
const router = require('express').Router();
const request = require('request');

const url = weatherAPI.url;

router.route('/search')
	.get((req, res) => {
		console.log('REQ', req.data)
		console.log('RES', res.data)
	})

module.exports = router;