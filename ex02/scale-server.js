const cluster = require('cluster');
const http = require('http');
const sleepModule = require('./sleep');

let sequenceNumber = 0;

const requestListener = (req, res) => {
    sleepModule.sleep(2000);
    res.writeHead(200);
    res.end(`[Server Worker ${process.env.workerId} Response] request ${++sequenceNumber} Ended!`);
}

if (cluster.isWorker) {
    const server = http.createServer(requestListener);
    server.listen(8080);
    console.log(`Server Worker ${process.env.workerId} is listening on port 8080`);
} else { // isMaster
    for (let i = 0; i < 4; i++) {
        cluster.fork({ workerId: i });
        console.log(`[MASTER] Worker ${i} Created`);
    }
}