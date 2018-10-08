const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_demo', {useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('db is good to go'));

var QuoteSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:5
    },
    quote:{
        type:String,
        required:true,
        minlength:10
    }
}, {timestamps:true})

module.exports = mongoose.model('Quote', QuoteSchema);