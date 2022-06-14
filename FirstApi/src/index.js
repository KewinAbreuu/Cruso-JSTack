// Faço o require do modulo nativo do node (http)
const http = require('http');

// Crio o servidor
const server = http.createServer((request, response)=>{
    // No head passo o status 200 de sucesso e o content type pra ele saber q é um html que to enviando
    response.writeHead(200, {'content-type':'text/html'});
    // Escrevo na tela (o proprio html)
    response.end('<h1>Hello word!</h1>');
});

// Starto o servidor na porta 3000
server.listen(3000, ()=>{console.log('🔥 Server Rodando! http://localhost:3000')})

// PRA RODAR O SERVIDOR: node src/index.js (no terminal)