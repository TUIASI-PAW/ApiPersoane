const express = require('express')
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.urlencoded({ extended: true })); // pentru utilizarea perechilor cheie-valoare
app.use(bodyParser.json());

app.listen(4300, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Serverul rulează pe portul ' + 4300);
	}
});