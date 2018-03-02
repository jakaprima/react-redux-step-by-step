var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddlware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3001

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler,{ 
	noInfo: true,
	publicPath: config.output.publicPath
	}))
app.use(webpackHotMiddlware(compiler))

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error){
	if (error){
		console.error(error)
	} else {
		console.info("==> 🌎 mendengarkan port %.s buka http://localhost:%s/ di browser anda.", port, port)
	}
})