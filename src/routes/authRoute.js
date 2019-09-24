'use strict';
module.exports = function(app) {
    var controller = require('../controllers/authController');
    var middleware = require('../middlewares/jwtVerifyMiddleware');

    app.post('/auth', controller.auth)
    app.get('/list', middleware.verify, controller.list);
}