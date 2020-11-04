const source = require('./source');
const app = require('./app');

source.eventEmitter.on('randomNumbers', async (a, b) => {
    const result: number = await app.sum(a, b);
    console.log('calculating:', `${a} + ${b} = ${result}`);
});

source.init();
