const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);



const jsonServer =require('json-server');
const server = jsonServer.create();
const router =jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 8080;
server.use(middlewares);
server.use(jsonServer.rewriter({
    '/public/images*':'/$1',
}))
server.use(router);
server.listen(PORT,() => {
    console.log("Server is running");
});
