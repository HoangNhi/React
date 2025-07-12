// // var array = ['a', 'b', 'c', 'd'];

// // var [a, ...rest] = array;

// // console.log(a, rest); // 'a'

// var course = {
//     name: 'JavaScript',
//     price: 100,
//     image: 'image-address',
//     children: {
//         name: 'React',
//         price: 200,
//         image: 'image-address'
//     }
// }

// var { name, description = 'default description'} = course;

// console.log(name, description); // 'JavaScript'

function logger(...params) {
    console.log(params);
}

console.log(logger(1, 2, 3, 4, 5)); // [1, 2, 3, 4, 5]