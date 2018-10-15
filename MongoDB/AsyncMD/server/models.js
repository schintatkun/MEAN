const mgoose = require('mongoose');
mgoose.connect('mongodb://localhost/asyncmd', {useNewUrlParser:true},
(errs)=>errs?console.log(errs):console.log('DB is ready'));

var AnimalSchema = new mgoose.Schema({

    name:{
        type: String,
        required: [true, 'title must be at least 1 characters long']
    }
}, {timestamps:true})
module.exports = mgoose.model('Animals',AnimalSchema)