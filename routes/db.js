var mongoose = require('mongoose'),
    DB_URL = 'mongodb:localhost:27017/biaoge';

// 链接
mongoose.connect(DB_URL);

// 连接成功
mongoose.connection.on('connected', function () {
    console.log('数据库连接成功');
})

// 连接异常
mongoose.connection.on('error', function (err) {
    console.log('数据库连接异常' + err);
})

mongoose.connection.on('disconnected', function () {
    console.log('数据库连接断开');
})

module.exports = mongoose;