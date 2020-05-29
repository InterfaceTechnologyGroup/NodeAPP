var express = require('express');
var cluster = require('cluster');
var bodyParser = require('body-parser');
var path = require('path');

var defaultController = require('./Controllers/DefaultController');


if (cluster.isMaster) {

    for (var i = 0; i < 5; i++) {
        cluster.fork();
    }

    cluster.on('fork', function(worker) {});

    cluster.on('online', function(worker) {})

    cluster.on('listening', function(worker, address) {});
    cluster.on('exit', function(worker) {});

} else {


    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(function(req, res, next) {

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
        next();
    });



    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', defaultController);


    app.listen(3000, () => {
        console.log('Uygulama çalıştırıldı... 80 Port');
    });

}

