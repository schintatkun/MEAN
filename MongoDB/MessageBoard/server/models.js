const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message',{useNewUrlParser:true},(errs)=>errs?console.log(errs):console.log('DB is ready'));

var CommentSchema = new mongoose.Schema({
    cName:{
        type:String,
        required: [true, "Name is required"],
        minlength: [3, "Name should be at least 3 characters"]
    },
    comment:{
        type:String,
        required: [true, "comment is required"],
        minlength: [3, "Comment should be at least 3 characters long"]
    }
})

var MessageSchema = new mongoose.Schema({
    mName:{
        type:String,
        required:[true, "Title is required"],
        minlength: [3, "Title should be at least 3 characters"] 
    },
    message_content: {
        type: String,
        required: [true, "Title is required"],
        minlength: [3, "Title should be at least 3 characters"] 
    },
    comments: [CommentSchema]
}, {timestamps:true})

module.exports = {
    Message: mongoose.model('Message', MessageSchema),
    newComment: mongoose.model('Comment', CommentSchema)
}