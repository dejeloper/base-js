const person = {
  name: "Tony",
  lastname: "Stark",
  age: 45,
  heroe: "Ironman",
};

// console.log(person.name);
// console.log(person.lastname);
// console.log(person.age);
// console.log(person.heroe);

const { name, lastname, age, heroe } = person;
console.log(name);
console.log(lastname);
console.log(age);
console.log(heroe);

const { power = "No tiene poder" } = person;
console.log(power);
console.log("=====================================");

// const createHeroe = (person) => {
//   return {
//     name: person.name,
//     lastname: person.lastname,
//     age: person.age,
//     heroe: person.heroe,
//     power: person.power,
//   };
// };

const createHeroe = ({ name, lastname, age, heroe, power }) => {
  return {
    name,
    lastname,
    age,
    heroe,
    power,
  };
};

const person2 = {
  name: "Bruce",
  lastname: "Wayne",
  age: 35,
  heroe: "Batman",
  power: "Dinero",
};

console.log(createHeroe(person2));

const createHeroe2 = ({ name, lastname, age, heroe, power }) => ({
  name,
  lastname,
  age,
  heroe,
  power,
});
