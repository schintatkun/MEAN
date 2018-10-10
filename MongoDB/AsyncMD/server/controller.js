const bp = require('body-parser');
const Animals = require('./models');
module.exports = {
    index:(req, res)=>{
       Animals.find({})
       .then(data=>console.log('Successfully get a list of animals')||res.json({info:data}))
       .catch(errs=>console.log('Errors')|| res.json(errs)) 
    },
    getAnimal:(req, res)=>{
        Animals.findById({_id:req.params.id})
        .then(data=>console.log('Successfully search an animal')||res.json({info:data}))
        .catch(errs=>console.log('Errors')|| res.json(errs)) 
    },
    createAnimal:(req, res)=>{
        Animals.create(req.body)
        .then(data=>console.log('Successfully created an animal')||res.json({info:data}))
        .catch(errs=>console.log('Errors')|| res.json(errs)) 
    },
    editAnimal:(req, res)=>{
        Animals.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
        .then(data=>console.log('Successfully updated an animal')||res.json({info:data}))
        .catch(errs=>console.log('Errors')|| res.json(errs)) 
    },
    delAnimal:(req, res)=>{
        Animals.findByIdAndDelete({_id:req.params.id})
        .then(data=>console.log('Successfully deleted an animal')||res.json({info:data}))
        .catch(errs=>console.log('Errors')|| res.json(errs)) 
    }
}