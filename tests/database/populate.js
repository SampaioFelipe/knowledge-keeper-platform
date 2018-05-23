var db = require('../../app/config/database');

var User = require('../../app/models/user');

var users = [];

function userCreate(first_name, last_name, birth_date) {
    var user_data = { first_name: first_name, last_name: last_name, birth_date: birth_date };

    var user = new User(user_data);

    user.save(function (err) {
        if (err) {
            console.log('Error');
            return
        }

        console.log('New User: ' + user);
        users.push(user);
    });
}

userCreate('Felipe', 'Sampaio de Souza', '1997-02-26');