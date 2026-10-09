import { createServer } from "node:http";
import { join } from "node:path";

const hostname = "localhost";
const port = 3000;

const server = createServer((req, res)=>{
    if(req.method == "GET" && req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.end("Welcome to the homepage!");
    }else if(req.method === "GET" && req.url ==="/books"){
        const books = [
            {id : 1, name : "Code React Sweetly"},
            {id : 2, name : "Creating NPM package"},
        ];
        res.writeHead(200, {"Content-Type" : "application/json"});
        res.end(JSON.stringify(books));
    }else{
        res.writeHead(404, {"Content-Type":"text//plain"});
        res.end("Page not found");

    }
});

server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});

