var express = require('express'),
    env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    path = require('path'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    logger= require('morgan'),
    rootPath = path.normalize(__dirname + '/../../');

var app = express();

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'jktech test2', resave:false, saveUninitialized:false}));

app.use(express.static('app'));

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html')
});



app.get('*', function (request, response) {
    console.log(rootPath);
    response.sendFile(__dirname  + '/404.html');// bootstrappedUser: request.user;
});

var config = require('./config')[env];

app.listen(config.port);
console.log("server starting on " + config.port + '...');
