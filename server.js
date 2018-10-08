const express = require('express');
const app = express();

const port = process.env.port || 8080;

app.listen(port, (error) => {
	if(error) {
		console.log(error);
	} else {
		console.log('Listening on port: ', port);
	}
})