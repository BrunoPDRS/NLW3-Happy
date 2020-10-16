const express = require('express');
const path = require('path');
const pages = require('./pages');

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', pages.index);
app.get('/orphanage', pages.orphanage);
app.get('/orphanages', pages.orphanages);
app.get('/create-orphanage', pages.createOrphanage);


app.listen(3333);
