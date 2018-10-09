const bp = require('body-parser');
const controller = require('./controller');
module.exports = function(app){

    app.use(bp.urlencoded({extended:true}));
    // app.use(bp.json());

    app.get('/',controller.index);
    app.get('/new/:name/', controller.newName);
    app.get('/remove/:name',controller.removeName);
    app.get('/:name', controller.displayName);

    return app;
};