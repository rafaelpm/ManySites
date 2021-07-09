/**
 * @autor Rafael
 * 
 * To test edit hosts file on path: C:\Windows\System32\drivers\etc\hosts
 * Add lines below (less *), see hosts file attached in my github project:
 * 127.0.0.1 mysite1
 * 127.0.0.1 mysite2
 * 127.0.0.1 mysite3
 * 
 */
var http = require('http'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

http.createServer(function (req, res) {
    let domain = req.headers.host;
    switch(domain){
        case 'mysite1':
            proxy.web(req, res, {
                target:'http://localhost:8081'
            });
            break;
        case 'mysite2':
            proxy.web(req, res, {
                target:'http://localhost:8082'
            });
            break;
        case 'mysite3':
            proxy.web(req, res, {
                target:'http://localhost:8083'
            });
            break;
        default:
            res.end('Domain not configured: '+domain);
            break;
    }    
}).listen(80);