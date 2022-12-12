var createError = require('http-errors');
var express = require('express');

const mongoose = require('mongoose')

var app = express();

// view engine setup

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

const pathConfig = require('./path');
global.__base = __dirname + '/'
global.__path_app = __base + pathConfig.folder_app + '/'

global.__path_schemas = __path_app + pathConfig.folder_schemas + '/'
global.__path_models = __path_app + pathConfig.folder_models + '/'
global.__path_routers = __path_app + pathConfig.folder_routers + '/'
global.__path_configs = __path_app + pathConfig.folder_configs + '/'

const databaseConfig = require(__path_configs + 'database');



mongoose.connect(`mongodb+srv://${databaseConfig.username}:${databaseConfig.password}@cluster0.hhhidzx.mongodb.net/?retryWrites=true&w=majority`)
  .then(()=>{
    console.log('Database connected')
  })
  .catch(()=>{
    console.log('Error connecting to database')
  })

// Setup router
app.use('/api/v1/', require(__path_routers));


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
