// function logger([a, b, ...rest]) {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// logger([1, 2, 3, 4,5]); // 1, 2

// var array = ['JavaScript', 'is', 'awesome'];

// var array2 = ['reactjs', 'is', 'cool'];

// var array3 = [...array2, ...array];

// console.log(array3); // ['reactjs', 'is', 'cool', 'JavaScript', 'is', 'awesome']

// var obj1 = {
//     name: 'John',
//     age: 30
// };

// var obj2 = {
//     city: 'New York'
// };

// var obj3 = {
//     ...obj1,
//     ...obj2,
// }

// console.log(obj3); // { name: 'John', age: 30, city: 'New York' }

// var defaults = {
//     host: 'localhost',
//     port: 8080,
//     protocol: 'http'
// };

// var options = {
//     ...defaults,
//     port: 3000,
//     protocol: 'https'
// };

// console.log(options); // { host: 'localhost', port: 3000, protocol: 'https' }

var array = ['javaScript', 'is', 'awesome'];

function logger(...rest) {
    for (let i = 0; i < rest.length; i++) {
        console.log(rest[i]);
    }
}

logger(...array); // javaScript, is, awesome