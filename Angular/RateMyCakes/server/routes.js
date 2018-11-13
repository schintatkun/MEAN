const controller = require('./controller');
const bp = require('body-parser');
module.exports = function(app){
    app.use(bp.urlencoded({extended: true}));
    app.use(bp.json());
    app.get('/cakes', controller.allCakes);
    app.post('/cakes', controller.createCake);
    app.get('/cakes/:id',controller.showCake);
    app.post('/cakes/comment/:id',controller.createComment);
    return app;
}