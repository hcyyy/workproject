var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入存放忽略网址的数组
var ignoreRoutes = require('./config/ignoreRoutes');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//中间件函数,自己添加的,用来判断用户是否处于登录状态
app.use(function (req, res, next) {
  //排除登录注册页面重定向过多的问题
  if (ignoreRoutes.indexOf(req.url) > -1) {
    next();
    return;
  }
  // 然后再进行用户状态判断
  var nickname = req.cookies.nickname;
  if (nickname) {
    next();
  } else {
    res.redirect('/login.html');
  }
});
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
