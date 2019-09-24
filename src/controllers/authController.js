'use strict';

const User = require('../models/userModel');

exports.auth = function (req, res) {
    var user = new User(1, 'teste', 'abc', '123');

    var jwt = require('jsonwebtoken');
    const id = 1;
    const secret = 'secret';

    var username = req.body.username;
    var password = req.body.password;

    if (username !== 'abc' || password !== '1234') {
        res.status(404).send({ auth: false, msg: 'auth_error' });
    } else {
        var token = jwt.sign({ id }, secret, { expiresIn: 300 });
        res.status(200).send({ auth: true, token: token });
    }
};

exports.list = function (req, res) {
    res.status(200).send({ list: true });
};
