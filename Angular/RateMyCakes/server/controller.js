const {Cakes, Comments} = require('./models');
// const Comments = require('./models');

module.exports = {
    allCakes: (req, res)=>{
        Cakes.find({})
        .then(data=>console.log("List all cakes")|| res.json({cakes:data}))
        .catch(errs=>console.log("Errors listing all cakes")|| res.json(errs))
    },
    createCake: (req, res)=>{
        Cakes.create(req.body)
        .then(data=>console.log("Succesfully created cake")|| res.json(data))
        .catch(errs=>console.log("Errors creating cake")|| res.json(errs))
    },
    showCake: (req, res)=>{
        Cakes.findById({_id: req.params.id})
        .then(data=>console.log("Succesfully find a cake")|| res.json(data))
        .catch(errs=>console.log("Errors finding a cake")|| res.json(errs))
    },
    createComment: (req, res)=>{
        Comments.create(req.body)
        .then(data=>{
            Cakes.findOneAndUpdate({_id:req.params.id}, {$push : {comment: data}})
                .then(data =>console.log("Added comment to a cake succesfully")|| res.json(data))
                .catch(data=>console.log("Errors adding comment")|| res.json(data))
        })
        .catch(errs=>console.log("Error creating a comment")|| res.json(errs))
    }
}