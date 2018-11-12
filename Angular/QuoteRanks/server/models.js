const mgoose = require('mongoose');
mgoose.connect("mongodb://localhost/quote_ranks", {useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('DB is ready'));

const QuoteSchema = new mgoose.Schema({
    quote:{
        type: String,
        required: [true, "Name cannot be empty"],
        minlength: [3,"Quote must be at least 3 characters"]
    },
    votes:{
        type: Number,
        default:0
    }
}, {timestamps:true})

const AuthorSchema = new mgoose.Schema({
    name:{
        type:String,
        required: [true, "Name cannot be empty"],
        minlength:[3, "Name must be at least 3 characters."]
    },
    quotes: [QuoteSchema]
},{timestamps:true})

module.exports = mgoose.model('Author',AuthorSchema)