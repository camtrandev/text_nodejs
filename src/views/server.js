const express = require('express');
require('dotenv').config();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.set('views','./src/views/')
app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.send('Hello World...!')
})

// config static files
app.use(express.static(path.join(__dirname,'public'))); 

app.get('/camdev', (req, res) => {
  res.render('text.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})