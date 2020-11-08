const http = require('http');

const options = {
    host: 'localhost',
    port: 8080,
};

const callback = (response) => {
    let result = '';

    response.on('data', (chunk) => {
        result += chunk;
    });
    response.on('end', () => {
        console.log(result);
    });
    response.on('error', (error) => {
        console.error(error);
    });
}

for(let i = 0 ; i< 10; i++){
    console.log(`[CLIENT] sending request ${i+1}`);
    http.request(options, callback).end();
}
