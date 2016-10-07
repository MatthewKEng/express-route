var express = require('express');
var router = express.Router();

var songs = [];

router.post('/', function(req, res){
  if (req.body.title===''||req.body.artist===''){
    console.log("req.body.title is", req.body.title);
    res.sendStatus(400);
  }else{
  console.log('req.body:', req.body);
  songs.push(req.body);
  console.log('songs', songs);
  res.sendStatus(200);
}
});

router.get('/', function(req, res){
  res.send(songs);
});





module.exports = router;
