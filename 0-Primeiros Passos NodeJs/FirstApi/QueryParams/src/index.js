// Faço o require do modulo nativo do node (http)
const http = require('http');
const { URL } = require('url');

const routes = require('./routes');
// Crio o servidor
const server = http.createServer((request, response)=>{

    const parsedUrl = new URL(`http://localhost:3000${request.url}`);

    console.log(parsedUrl)

    const route = routes.find((routeObj)=>(
        routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
    ));

    if (route){
        request.query = Object.fromEntries(parsedUrl.searchParams);
        route.handler(request, response);
    }else{
        response.writeHead(404, {'content-type':'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);
    }

});

server.listen(3000, ()=>{console.log('🔥 Server Rodando! http://localhost:3000')})


// node src/index.js