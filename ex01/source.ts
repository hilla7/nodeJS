const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

const getRandomInteger = (max: number) => Math.floor(Math.random() * max);

const init = () => {
    const intervalTimeMs: number = 1000;
    setInterval(() => {
        eventEmitter.emit('randomNumbers', getRandomInteger(100), getRandomInteger(100));
    }, intervalTimeMs);
};

module.exports = {
    eventEmitter,
    init,
};
