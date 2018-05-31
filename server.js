const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');

const port = process.env.PORT || 5000;
const server = express();

server.use(cors({}));
server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.json({ Message: 'Hello World' });
});

server.listen(port, err => {
    if(err) console.log(err);
    console.log('API running on ${port}');
})