'use strict'

exports.verify = function (req, res, next) {
    var jwt = require('jsonwebtoken');
    var token = req.headers['x-access-token'];
    if (!token) {
        return res.status(401).send({ auth: false, message: 'No token provided.' });
    }
    const secret = 'secret';
    jwt.verify(token, secret, function(err, decoded) {
      if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      req.userId = decoded.id;
      next();
    });
}