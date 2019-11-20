import middleware from "../middlewares";
var morgan = require("morgan");

var express = require('express')
var app = express()

var bodyParser = require('body-parser')
var serveStatic = require('serve-static')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: (req) => /application\/.*json.*/i.test(req.headers["content-type"]) }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
app.use(bodyParser.text({ type: 'text/html' }))

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"'))
middleware(app);
app.get('/', serveStatic('dist/public'));
 
app.listen(process.env.PORT || 9090)
