const mgoose = require('mongoose');
mgoose.connect('mongodb://localhost/cakes', { useNewUrlParser: true },
    (errs) => errs ? console.log(errs) : console.log('DB is ready'));
const CommentSchema = new mgoose.Schema({
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        minlength: [10, "At least 10 characters long"]
    }
}, { timestamps: true });

const CakeSchema = new mgoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "At least 2 characters long"]
    },
    image: {
        type: String,
        required: true
    },
    comment: [CommentSchema]
}, { timestamps: true });

module.exports = {
    Cakes: mgoose.model('Cakes',CakeSchema),
    Comments: mgoose.model('Comments',CommentSchema)
}
