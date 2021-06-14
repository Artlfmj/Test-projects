const express = require('express')
const app = express()
const morgan = require('morgan')
var favicon = require('serve-favicon');
const bodyParser = require('body-parser')
const serverconfig = require('./config/server.json') 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(favicon("assets/favicon.ico")); 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

const robots = require('./routes/robots');
app.use('/robots.txt', robots)

app.listen(serverconfig.port, () => {
    console.log(`Serveur à l'écoute sur le port ${serverconfig.port}`)
})