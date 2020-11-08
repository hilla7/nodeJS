const http = require('http');
const sleepModule = require('./sleep');

let sequenceNumber = 0;

const requestListener = (req, res) => {
    sleepModule.sleep(2000);
    res.writeHead(200);
    res.end(`[SERVER Response] request ${++sequenceNumber} Ended!`);
}

const server = http.createServer(requestListener);
server.listen(8080);
console.log('server is listening on port 8080');