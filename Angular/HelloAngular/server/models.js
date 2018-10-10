const mgoose = require('mongoose');
mgoose.connect('mongodb://localhost/restfulapi',{useNewUrlParser:true},
(errs)=>errs?console.log(errs):console.log('DB is ready'));

var TaskSchema = new mgoose.Schema({
    title:{
        type: String,
        required: [true, 'title must be at least 1 characters long'],
        minlength: [1, 'Must be at least 1 characters']
    },
    description:{
        type: String,
        required: [true, 'desc is required'],
        minlength: [1, 'Must be at least 1 characters long']
    },
    completed: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})

module.exports = mgoose.model('Task',TaskSchema);