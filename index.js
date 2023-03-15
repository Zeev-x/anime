var x = require('anime-zee');
var m = '&mobile=ok';
var y = "Anime girl";
var r = y + m;

x.anime(r)
  .then(result => {
    console.log(result);
  });
