// function saludo( nombre){
// 	return `Hola ${nombre}`
// }

const saludo = (nombre) => `Hola ${nombre}`;

const nombre = "Juan";

console.log(saludo(nombre));

const saludo2 = (nombre = "Maria") => {
  return `Hola ${nombre}`;
};

console.log(saludo2());

const getUser = () => {
  return {
    uid: "ABC123",
    username: "dejeloper 1",
  };
};

console.log(getUser());

const getUser2 = () => ({ uid: "ABC123", username: "dejeloper 2" });

console.log(getUser2());

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
];

const existe = heroes.some((heroe) => heroe.id === 1);
console.log(existe);

const existe2 = heroes.find((heroe) => heroe.id === 2);
console.log(existe2.name);
