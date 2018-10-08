const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.port || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(routes);

app.use(routes);

app.listen(port, (error) => {
	if(error) {
		console.log(error);
	} else {
		console.log('Listening on port: ', port);
	}
});