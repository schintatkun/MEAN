const mgoose = require('mongoose');
mgoose.connect("mongodb://localhost/productmanagement", {useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('DB is ready'));

// const QuoteSchema = new mgoose.Schema({
//     quote:{
//         type: String,
//         required: [true, "cannot be empty"],
//         minlength: [3,"Quote must be at least 3 characters"]
//     },
//     votes:{
//         type: Number,
//         default:0
//     }
// }, {timestamps:true})

const ProductSchema = new mgoose.Schema({
    title:{
        type:String,
        required: [true, "cannot be empty"],
        minlength:[3, "title must be at least 3 characters."]
    },
    price: {
        type: Number,
        required: [true, "price cannot be empty"],
        minlength: [1, "price must be at least 1 digit"]
    },
    imgURL: {
        type: String,
        required: [true, "URL cannot be empty"],
        minlength: [10, "Must be at least 10 characters"]
    }
},{timestamps:true})

module.exports = mgoose.model('Product',ProductSchema)