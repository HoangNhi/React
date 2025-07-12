// const sum = (a, b) => a + b;

// console.log(sum(2, 3))

const sum = (a, b) => {
    return {
        a: a,
        b: b,
    }
}

// console.log(sum(2, 3));

const logger = (message, type) => console[type](message);
logger('Hello, World!', 'log');
