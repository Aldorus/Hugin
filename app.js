const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = http.createServer(app);

// define the folder that will be used for static assets
app.use(express.static(path.join(__dirname, 'build')));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.listen(process.env.PORT || 8181);