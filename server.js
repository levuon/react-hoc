var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config');
var compiler = webpack(webpackConfig);
var cpexec = require('child_process').exec;
// var spawn = require('child_process').spawn;

var host = "localhost"
var port = 3000;


new WebpackDevServer(compiler,webpackConfig.devServer)
    .listen(port, host, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.info('Webpack development server listening on port %s: %s', host, port);
        }
    });

//// open browser
// var cmd;
// switch (process.platform) {
// 	case 'darwin':
// 		cmd = 'open';
// 		break;
// 	case 'wind32':
// 		cmd = 'start "%ProgramFiles%\Internet Explorer\iexplore.exe"';
// 		break;
// 	default:
// 		cmd = 'open';
// }
//
// cpexec( `${cmd} http://localhost:${port}` );
