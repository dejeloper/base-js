const array = [1, 2, 3, 4];

console.log("array", array);
console.log("array[2]", array[2]);

array.push(5);
//array = [1, 2, 3, 4, 5];
console.log("array", array);

const array2 = [...array];
array2.push(6);

console.log("array2", array2);
console.log("array", array);
const array3 = [...array2, 7];

console.log("array3", array3);
console.log("array2", array2);
console.log("array", array);

const array4 = array3.map(function (numero) {
  return numero * 2;
});

console.log("array4", array4);
