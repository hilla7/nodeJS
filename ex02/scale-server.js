const cluster = require('cluster');
const http = require('http');

if (cluster.isWorker) {
    let sequenceNumber = 0;
    const sleep = (ms) => {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, ms);
    }

    const requestListener = (req, res) => {
        sleep(2000);
        res.writeHead(200);
        res.end(`[Server Worker ${process.env.workerId} Response] request ${++sequenceNumber} Ended!`);
    }

    const server = http.createServer(requestListener);
    server.listen(5001);
    console.log(`Server Worker ${process.env.workerId} is listening on port 5001`);

} else {
    // isMaster
    for (let i = 0; i < 4; i++) {
        cluster.fork({workerId: i});
        console.log(`[MASTER] Worker ${i} Created`);
    }
}