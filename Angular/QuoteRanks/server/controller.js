const Author = require('./models');

module.exports = {
    getAllAuthors: function(req,res){
        Author.find({})
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    createAuthor:function(req,res){
        Author.create(req.body)
            .then(data=>console.log(data)|| res.json(data))
            .catch(errs=>console.log(errs)|| res.json(errs))
    },
    getOneAuthor:function(req,res){
        Author.findById(req.params.author_id)
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    updateAuthor:function(req,res){
        Author.findByIdAndUpdate(req.params.author_id,req.body, {new:true, runValidators:true})
            .then(data=>console.log(data)|| res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    createQuote:function(req,res){
        Author.findByIdAndUpdate(req.body.author_id, {$push: {quotes: req.body}}, {new:true, runValidators:true})
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    updateQuote:function(req,res){
        Author.findOneAndUpdate({"quotes._id":req.params.quote_id}, {$inc:{"quotes.$.votes":req.body.votes}}
    , {new:true, runValidators:true})
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    deleteQuote:function(req,res){
        Author.findOneAndUpdate({"quotes._id":req.params.quote_id}, {$pull: {quotes: {_id:req.params.quote_id}}},
        {new:true, runValidators:true})
        .then(data=>console.log(data) || res.json(data))
        .catch(errs=>console.log(errs) || res.json(errs))
    }
    
}