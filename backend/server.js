import { createServer } from "node:http";
import rateLimiter from "./src/middleware/rateLimiter.js";
import {connectDB} from "./src/database/db.js";
import { start } from "node:repl";


const server = createServer((req, res) =>{
    rateLimiter(req, res, ()=>{
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        res.end("Hello from Node.js!");
    });
});



async function startServer(){
    try{
        await connectDB();

        server.listen(3000, ()=>{
            console.log("Server running at http://localhost:3000");
        });
        
    }catch(error){
        console.log("Failed to start server:", error.message);

    }
}

startServer();