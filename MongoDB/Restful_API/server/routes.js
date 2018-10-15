const bp = require('body-parser');
const controller = require('./controller');
module.exports = function(app){
    
    app.use(bp.urlencoded({extended:true}));
    app.use(bp.json());
    app.get('/',controller.index);
    app.post('/tasks',controller.createTask);
    app.get('/tasks/:id', controller.getTask);
    app.put('/tasks/:id', controller.updateTask);
    app.delete('/tasks/:id',controller.deleteTask);
    return app;
}