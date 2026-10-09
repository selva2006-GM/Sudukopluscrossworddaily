// import { createServer } from "node:http";
// const server = createServer();

const http = require("node:http");
const server  =  http.createServer();

// server.listen(port, hostname, backlog, callback);
server.listen(3000, "127.0.0.1", 511, ()=>{
    const info = server.address();
    console.log(`Server running at http://${info.address}:${info.port}/`);
});;