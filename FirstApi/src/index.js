// Faço o require do modulo nativo do node (http)
const http = require('http');

const routes = require('./routes');
// Crio o servidor
const server = http.createServer((request, response)=>{
    
    const route = routes.find((routeObj)=>(
        routeObj.endpoint === request.url && routeObj.method === request.method
    ));

    if (route){
        route.handler(request, response);
    }else{
        response.writeHead(404, {'content-type':'text/html'});
        response.end(`Cannot ${request.method} ${request.url}`);
    }

});

server.listen(3000, ()=>{console.log('🔥 Server Rodando! http://localhost:3000')})


// node src/index.js