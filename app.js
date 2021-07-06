require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let pgtools = require('pgtools');
const middleware = require('./middleware');
const { initSequelize } = require('./services/initService');
const authController = require('./controllers/authorization/auth');
const userController = require('./controllers/users/users');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const workshopRouter = require('./routes/workshops');
const clientsRouter = require('./routes/clients');
const productRouter = require('./routes/products');

var app = express();

middleware(app);
authController(app);
userController(app);

const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  host: process.env.POSTGRES_HOST
}

console.log(`User: ${process.env.POSTGRES_USER}`);
console.log(`Password: ${process.env.POSTGRES_PASSWORD}`);
console.log(`Host: ${process.env.POSTGRES_HOST}`);
console.log(`Port: ${process.env.POSTGRES_PORT}`);
console.log(`DB: ${process.env.POSTGRES_DATABASE}`);

pgtools.createdb(config, process.env.POSTGRES_DATABASE, function (err, res) {
  if (err) {
      if(err.name === 'duplicate_database'){
          console.log('Database already exists');
      }
      else{
          console.log(err);
      }
  }
  else {
      console.log('Database has been created successfully!');
  }

  initSequelize();

});

// view engine setup
app.set('views', path.join('../R-card FrontEnd/', 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join('../R-card FrontEnd/', 'public')));

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/workshop', workshopRouter);
app.use('/api/clients', clientsRouter);
app.use('/api/products', productRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {  
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
