// 1. Định nghĩa key: value cho object
// 2. Định nghĩa method cho object

// var name = 'JavaScript';
// var price = 1000;
// var course = {
//     name, 
//     price,
//     getName() {
//         return this.name;
//     },
// }

// console.log(course.getName()); // JavaScript

// 3. Định nghĩa key cho object dưới dạng biến
var fieldName = 'name';
var fieldPrice = 'price';
const course = {
    [fieldName]: 'JavaScript',  
    [fieldPrice]: 1000,
}

console.log(course); // JavaScript