//Require the Express Module 
var express = require('express');
//Create an Express App
var app = express();
//Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
//Integrate body-parser with our App
app.use(bodyParser.urlencoded({extended: true}));
//Require path
var path =require('path');

app.set('views', path.join(__dirname, './server/views'));
app.set('view engine', 'ejs');

//DB connection
var mongoose = require('mongoose');
//connect to database in mongoDB
mongoose.connect('mongodb://localhost/animals', {useNewUrlParser:true});
var animalSchema = new mongoose.Schema({
    name: String,
})
mongoose.model('Animal', animalSchema);
var animal =mongoose.model('Animal');

// routing
app.get('/',function(req,res){
    var allAnimals =animal.find({})
    .then((data)=>{res.render('index', {allAnimals:data})})
    .catch((errs)=>{res.render('index',{errors: errs})})
    
})
app.get('/animals/new', function(req,res){
    res.render('new');
})
app.post('/animals/new', function(req, res){
    console.log("Post Data", req.body);
    animal.create(req.body);
    console.log('just create animal');
    res.redirect('/');
})
app.get('/animals/:id', function(req, res){
    
    animal.find({_id:req.params.id}, function(err, animal){
        if(err){
            console.log(err);
        }else{
            res.render('show',{findAnimal: animal[0]});
        }
    });
});

//get edit page
app.get('/animals/edit/:id', function(req, res){
    animal.find({_id:req.params.id}, function(err, animal){
        if(err){console.log(err);}
        else{res.render('edit',{myAnimal: animal[0]});}
    });
    // .then((data)=>{res.render('edit',{myAnimal:data})})
    // .catch((errs)=>{res.render('edit',{errors: errs})})
});

//update animal
app.post('/animals/edit/:id',function(req, res){
    console.log(req.body);
    animal.updateOne({_id:req.params.id}, req.body,function(err, result){
        if(err){console.log(err);}
        else{res.redirect('/');}
    });
});

//delete 
app.get('/animals/destroy/:id', function(req,res){
    animal.findByIdAndRemove({_id:req.params.id}, function(err){
        if(err){console.log(err);}
        else{res.redirect('/');}
    });
});


app.listen(8000, function() {
    console.log('listen on port 8000');
})