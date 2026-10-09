const requests = new Map();

const LIMIT = 5;
const WINDOW = 60 * 1000;


function rateLimiter(req, res, next){

    const ip = req.socket.remoteAddress;
    const now = Date.now();
    console.log(ip);

    let data = requests.get(ip);

    if(!data || now - data.start >= WINDOW){
        data = { start : now , count: 0};
    }

    data.count++;
    requests.set(ip, data);

    if(data.count > LIMIT){
        res.writeHead(429, {
            "Content-Type" : "text/plain"
        });
        return res.end("Too many request!");
    }
    next();
}

export default rateLimiter;