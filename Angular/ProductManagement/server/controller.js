const Product = require('./models');

module.exports = {
    getAllProducts: function(req,res){
        Product.find({})
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    createProduct:function(req,res){
        Product.create(req.body)
            .then(data=>console.log(data)|| res.json(data))
            .catch(errs=>console.log(errs)|| res.json(errs))
    },
    deleteProduct:function(req, res){
        Product.findByIdAndDelete(req.params.product_id)
            .then(data=>console.log(data)|| res.json(data))
            .catch(errs=>console.log(errs)|| res.json(errs))
    },
    getOneProduct:function(req,res){
        Product.findById(req.params.product_id)
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    },
    updateProduct:function(req, res){
        Product.findByIdAndUpdate(req.params.product_id, req.body, {new:true, runValidators:true})
            .then(data=>console.log(data) || res.json(data))
            .catch(errs=>console.log(errs) || res.json(errs))
    }
    // updateAuthor:function(req,res){
    //     Product.findByIdAndUpdate(req.params.author_id,req.body, {new:true, runValidators:true})
    //         .then(data=>console.log(data)|| res.json(data))
    //         .catch(errs=>console.log(errs) || res.json(errs))
    // },
    // createQuote:function(req,res){
    //     Product.findByIdAndUpdate(req.body.author_id, {$push: {quotes: req.body}}, {new:true, runValidators:true})
    //         .then(data=>console.log(data) || res.json(data))
    //         .catch(errs=>console.log(errs) || res.json(errs))
    // },
    // updateQuote:function(req,res){
    //     Product.findOneAndUpdate({"quotes._id":req.params.quote_id}, {$inc:{"quotes.$.votes":req.body.votes}}
    // , {new:true, runValidators:true})
    //         .then(data=>console.log(data) || res.json(data))
    //         .catch(errs=>console.log(errs) || res.json(errs))
    // },
    // deleteQuote:function(req,res){
    //     Product.findOneAndUpdate({"quotes._id":req.params.quote_id}, {$pull: {quotes: {_id:req.params.quote_id}}},
    //     {new:true, runValidators:true})
    //     .then(data=>console.log(data) || res.json(data))
    //     .catch(errs=>console.log(errs) || res.json(errs))
    // }
    
}