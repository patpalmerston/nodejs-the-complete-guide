const express = require('express');
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.urlencoded({ extended: false }));

server.use('/add-product', (req, res, next) => {
	res.send(
		'<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
	);
});

server.use('/product', (req, res, next) => {
	console.log(req.body);
	res.redirect('/');
});

server.use('/', (req, res, next) => {
	res.send('<h1>Where?</h1>');
});

server.listen(3000);
