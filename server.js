
var express = require('express')
  , app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res){
  res.sendfile(__dirname + 'public/index.html');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})