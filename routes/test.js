var User = require('./dbuser.js');

function insert() {
    var user = new User({
        username: 'Tom',
        userpasswrod: '123'
    });

    user.save(function (err, res) {
        if (err) {
            console.log('插入失败' + err);
        } else {
            console.log('插入成功' + res);
        }
    });
}

insert();