const bp = require('body-parser');
const controller = require('./controller');
module.exports = function(app){
    app.use(bp.json());
    app.get('/tasks',controller.index);
    app.post('/tasks', controller.createTask);
    app.put('/tasks/:id', controller.updateTask);
    app.delete('/tasks/:id',controller.deleteTask);
    app.get('/tasks/:id',controller.getTask);
    return app;
}