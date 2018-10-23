const mongoose = require('mongoose');
const customID = require('mongoose-hook-custom-id');
mongoose.connect("mongodb://localhost/beltexam", {useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('DB is ready'));

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
var id = 0;
const ProductSchema = new mongoose.Schema({
    // _id:{ type: Number,
    //       default: id+1
    // },
    name:{
        type:String,
        required: [true, " Product must contain a Name"],
        minlength:[3, "Name must be at least 3 characters long."]
    },
    qty:{
        type: Number,
        required:[true, "Product must contain a Qty"],
        min: [1, "Qty must be greater than zero"]
    },
    price: {
        type: Number,
        required: [true, "Product must contain a Price"],
        min: [1, "price value must be greater than zero"]
    }
},{timestamps:true})

ProductSchema.plugin(customID, {mongoose:mongoose , 
generator:function(){return Math.floor(Math.random()*100000);}})
module.exports = mongoose.model('Product',ProductSchema)