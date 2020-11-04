const delayMs = 1000;

const sum: (a: number, b: number) => Promise<number> = (a: number, b: number) => {
    return new Promise((resolve) => setTimeout(() => resolve(a + b), delayMs));
};

module.exports = {
    sum,
};
