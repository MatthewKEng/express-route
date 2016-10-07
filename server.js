var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var songRouter = require('./routes/songs');
var app = express();

// middleware function, gets executed on each request
app.use(function(req, res, next){
  console.log('Got a request!');
  next();
});



// middleware for parsing the body and turning it into a JS object
app.use(bodyParser.urlencoded({extended: true}));

app.use('/songs', songRouter);


app.post('/', function(req, res){
  console.log('req.body=', req.body);
  res.sendStatus(200);
});

app.get('/', function(req, res){
  console.log('Received a request at', new Date());
  // __dirname is the folder this file lives in
  var filename = path.join(__dirname, 'public/views/index.html');
  console.log('filename:', filename);
  res.sendFile(filename);
});

app.get('/kittens', function(req, res){
  console.log('Query params:', req.query);
  if (req.query.age > 2) {
    res.send('MEOW!');
  } else {
    res.send('meow');
  }
});


// middleware for serving static files
app.use(express.static('public'));

app.listen(3000);
