const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
app.server = http.createServer(app);

app.use(express.static(__dirname + '/src'));
        
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

//app.use(express.static(path.join(__dirname, 'src')));
//app.get('*', (req, res) => {
//  res.sendFile(path.join(__dirname, '/src/index.html'))
//});

app.server.listen(process.env.PORT || 8100);
