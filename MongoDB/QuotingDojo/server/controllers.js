
const Quote = require('./models');
module.exports = {
    index: (req,res)=>{
        res.render('index', {test:"hello world"})
    },
    getAll:(req,res)=>{
        Quote.find({})
            .then((data)=>{res.render('quotes', {allQuotes:data})})
            .catch((errs)=>{res.render('quotes', {errors:errs})})
    },
    createQuote:(req,res)=>{
        console.log('contents of the form: ' + req.body.name);
        Quote.create(req.body);
        res.redirect('/');
    },
}