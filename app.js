require('dotenv').config();
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const burgersController = require('./controllers/burgers_controller');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.set('view engine', 'handlebars');
app.engine('handlebars', handlebars({
    layoutsDir: path.join(__dirname, '/views/layouts')
}));
app.use('/', burgersController);
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));