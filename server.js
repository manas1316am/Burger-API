const jsonServer = require('json-server'); // Importing json-server
const server = jsonServer.create() // Creating jsonserver 
const router = jsonServer.router('db.json') // Routing json
const middlewares = jsonServer.defaults() // Creating middlewares
const port = process.env.PORT || 3000;

// Use router and middlewares
server.use(middlewares);
server.use(router);

// Listening to the port
server.listen(port)
