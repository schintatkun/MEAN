// --------- required components ----------
const bp = require('body-parser');
const controller = require('./controller');
module.exports = function(app){
    app.set('views', __dirname +'/views');
    app.set('view engine', 'ejs');
    app.use(bp.urlencoded({extended:true}))
// ----------------------------------------
    
// routing 
    app.get('/', controller.index);
    app.post('/message', controller.createMessage);
    app.post('/comment/:id', controller.createComment);

    return app;
}