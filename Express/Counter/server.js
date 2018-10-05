var express = require("express");
var session = require('express-session');
var app = express();
var path = require("path");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    if(!req.session.count){
        req.session.count =1;
    }
    res.render("index", {count:req.session.count});
})
app.post('/counter', function(req,res){
    console.log('Post data, user click button')
    req.session.count +=2;
    res.redirect('/')
})
app.post('/reset',function(req,res){
    req.session.destroy();
    res.redirect('/')
})

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
