const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

server.use(bodyParser.urlencoded({ extended: false }));

server.use(adminRoutes);
server.use(shopRoutes);

server.use((req, res, next) => {
	res.status(404).send('<h1>404 Page not found</h1>');
});

server.listen(3000);
