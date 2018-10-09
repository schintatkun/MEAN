const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955api',{useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('DB is ready'));

var NameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minlength: [3, 'Must be at least 3 characters long']
    }
}, {timestamps: true})

module.exports = mongoose.model('Name', NameSchema);