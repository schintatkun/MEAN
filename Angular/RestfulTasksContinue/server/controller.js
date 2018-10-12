const Task = require('./models');
module.exports = {
    index:(req, res)=>{
        Task.find({})
        .then(data=>res.json({task:data}))
        .catch(errs=>console.log('Errors')||res.json(errs))
    },
}