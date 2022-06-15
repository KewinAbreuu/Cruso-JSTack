1º - Criar index.js e criar o servidor http
2º -- Criar mocks/users.js (array de obj com id e name dos usuarios)
3º --- Criar controllers/userController.js -> Recebe users - listUsers(req,res) => (response.writeHead e response.end (JSON.stringfy(users)
4º ---- Criar src/routes.js -> Recebe userController - Array de obj com endpoint, method e handler:usercontroler.listUsers
5º ----- No index.js -> Recebe routes - faz um find no routes - verifica se o endpoint e method são iguais os da request e se nao for retorna o 404 

