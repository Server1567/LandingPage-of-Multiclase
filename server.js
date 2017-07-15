var express = require('express');
var app     = express();

app.use('/files',express.static("files"))
app.set("view engine","ejs");
app.get('/',function (req,res) {
  res.render("index")
})

app.listen(8080);
console.log("server running at 8080")