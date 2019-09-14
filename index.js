const express = require('express');
const bodyParser = require('body-parser');

const server = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

server.use(bodyParser.urlencoded({ extended: false }));

server.use(adminRoutes);
server.use(shopRoutes);

server.listen(3000);
