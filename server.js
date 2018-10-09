const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.port || 8080;

const request = require('request');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use(routes);

app.get('/search/:zip', (req, res) => {
	request('https://api.openweathermap.org/data/2.5/weather?APPID=18d1f1f1d028e3a40481786d7404c7d3&zip=95112', (error, response, body) => {
			if(error) {
				console.log('ERROR: ', error);
			}
			console.log(JSON.parse(body).main.temp)
	})
})

app.listen(port, (error) => {
	if(error) {
		console.log(error);
	} else {
		console.log('Listening on port: ', port);
	}
});