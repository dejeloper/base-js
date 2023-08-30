const characters = ["Goku", "Vegeta", "Trunks", "Gohan"];

// const goku = characters[0];
// const vegeta = characters[1];
// const trunks = characters[2];
// const gohan = characters[3];

const [, , trunks, gohan, goten = "No tiene valor"] = characters;

console.log(trunks, gohan, goten);
console.log("=====================================");

const returnArray = () => {
  return ["ABC", 123];
};

// const pair = returnArray();
// console.log(pair[0], pair[1]);
const [letters, numbers] = returnArray();
console.log(letters, numbers);

console.log("=====================================");

// const returnArray2 = (arr) => {
//   return [arr[0], arr[1]];
// };

const returnArray2 = ([letters, numbers]) => {
  return [letters, numbers];
};

const [letters2, numbers2] = returnArray2(["XYZ", 456]);
console.log(letters2, numbers2);
