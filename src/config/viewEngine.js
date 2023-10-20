const path = require('path');
// thêm express để tránh not defined ở phần static
const express = require('express');

const configViewEngine = (app) => {
    // code nhu HTML
    app.set('views', './src/views');
    app.set('view engine', 'ejs');

    // config static file: img/css/js
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;