const bp = require('body-parser');
const controller = require('./controller');
module.exports = function(app){
    
    app.use(bp.json());
    // app.get('/',controller.index);
    return app;
}