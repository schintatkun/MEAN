const {Message, newComment} = require('./models');
module.exports = {
    index: function(req, res){
        Message.find({})
            .then((data)=>{res.render('index', {allmessages:data})})
            .catch((errs)=>{res.render('index',{errors: errs})})
    },
    createMessage: function(req,res){
        Message.create(req.body, function(err){
            if(err){console.log(err);}
            else{console.log('Just created message');
                res.redirect('/');
            }
        })
    },
    createComment: function(req,res){
        newComment.create(req.body, function(err,data){
        // newComment.create(req.body, function(err){
            if(err){console.log(err);}
            else{
                console.log('comment was created');
                Message.findOneAndUpdate({_id: req.params.id}, {$push: {comments:data}}, function(err, data){
                    if(err){console.log(err);}
                    else{
                        res.redirect('/');
                    }
                })
            }
        }
    )},
}