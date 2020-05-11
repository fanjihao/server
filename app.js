var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
const expressJWT = require('express-jwt')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let adminRouter = require('./router/admin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // 允许任意地址访问
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next(); // 继续下一个中间件的处理
});

app.use(expressJWT({
  secret: util.secretOrPrivateKey  // 密钥，对应生成 token 时的密钥
}).unless({
  path: [ //除了这个地址，其他的URL都需要验证
    '/users/login'
  ] 
}));

app.use('/admin',adminRouter)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log('500错误：', err);
  // 校验 token 失败时的处理
  // 默认的情况下，解析 JWT 失败会抛出异常，可以通过以下设置来处理该异常
  if (err.name === 'UnauthorizedError') {   
    // 这个需要根据自己的业务逻辑来处理
    res.status(401).json({
      message: 'invalid token',
      error: err
    });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
