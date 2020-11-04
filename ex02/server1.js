const http = require('http');
let sequenceNumber = 0;
const sleep = (ms) => {
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
}


const requestListener = (req, res) => {
    sleep(2000);
    res.writeHead(200);
    res.end(`[SERVER Response] request ${++sequenceNumber} Ended!`);
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('server is listening on port 8080');