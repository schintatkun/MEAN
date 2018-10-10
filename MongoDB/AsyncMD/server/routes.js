const bp = require('body-parser');
const controller = require('./controller');
module.exports = function(app){
    app.use(bp.urlencoded({extended:true}));
    app.get('/',controller.index);
    app.get('/animals/:id', controller.getAnimal);
    app.post('/animals/new', controller.createAnimal);
    app.put('/animals/:id',controller.editAnimal);
    app.delete('/animals/:id', controller.delAnimal);
    return app;
}