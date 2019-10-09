const http = require('http');
const app = require('./app/app');
const port = process.env.PORT || 1025;

const server = http.createServer(app);

if(server){
    console.log("Server listening to port: ",port);
}

server.listen(port, () => console.log("Started"));
