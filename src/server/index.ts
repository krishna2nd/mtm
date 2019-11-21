import middleware from "../middlewares";
var fs = require('fs');
var http = require('http');
var https = require('https');
var morgan = require("morgan");
var cors = require("cors");
var express = require('express')


var app = express()

var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: (req) => /application\/.*json.*/i.test(req.headers["content-type"]) }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
app.use(cors({
    origin: '*',
  optionsSuccessStatus: 200
}))
middleware(app);
app.get('/', serveStatic('dist/public'));
 


var privateKey  = fs.readFileSync('cert/server.key', 'utf8');
var certificate = fs.readFileSync('cert/server.crt', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(process.env.PORT || 80);
httpsServer.listen(process.env.SPORT || 443);
