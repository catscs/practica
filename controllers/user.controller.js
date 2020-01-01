const db = require('../config/db.config');

function getUsers(req, resp) {
    db.user.find((err, users) => {
        resp.status(200).send(users);
    })
}

function getUserByEmail(req, resp) {
    db.user.findOne({ "email": req.params.email }, (err, user) => {
        if (!err && user) {
            resp.status(200).send(user);
        } else {
            resp.status(404).send('No user found!')
        }
    });
}

function insertUser(req, resp) {
    const user = new db.user();
    user.name = req.body.name;
    user.username = req.body.username;
    user.email = req.body.email;
    user.save((err, doc) => {
        if (!err && doc) {
            resp.status(200).send('new User!');
        } else {
            resp.status(400).send('Params error');
        }
    });
}

function updateUserByEmail(req, resp) {
    db.user.findOneAndUpdate({ "email": req.params.email }, {
        name: req.body.name,
        username: req.body.username
    }, (err, doc) => {
        if (!err && doc) {
            resp.status(200).send('update User!');
        } else {
            resp.status(400).send('Params error');
        }
    });
}

function deleteUserByEmail(req, resp) {
    db.user.findOneAndDelete({ "email": req.params.email }, (err, doc) => {
        if (!err && doc) {
            resp.status(200).send('delete User!');
        } else {
            resp.status(404).send('No user found!');
        }
    });
}

module.exports = { getUsers, getUserByEmail, insertUser, updateUserByEmail, deleteUserByEmail };