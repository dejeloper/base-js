// import { owners } from "../data/heores.js";

// console.log(owners);

import superHeores from "../data/heores.js";

// console.log(superHeores);

const getHeroeById = (id) => {
  return superHeores.find((heroe) => heroe.id === id);
};

// console.log(getHeroeById(2));

const getHeroeByOwner = (owner) => {
  return superHeores.filter((heroe) => heroe.owner === owner);
};

console.log(getHeroeByOwner("DC"));
