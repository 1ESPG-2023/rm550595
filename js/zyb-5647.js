
const liElement = document.getElementsByTagName("li");



// for (let index = 0; index < liElement.length; index++) {
//     console.log(liElement[index].textContent)
// }
// console.log(liElement.length)

//declaração de arrays
let nm1 = [1,2,3,4,5];
let nm2 = [6,7,8,9,10];
let nm3 = [nm1,nm2];


nm3.forEach((itemdaarray)=>
console.log('array-3 sendo listado ${itemdaarray}');
