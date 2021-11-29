const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('static'));

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

require('./route/index.js')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});