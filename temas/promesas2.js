import { getHeroeById } from "./imports_exports.js";

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      if (!heroe) {
        reject(`No se pudo encontrar el héroe: ${id}`);
      }
      resolve(heroe);
    }, 1000);
  });
};

getHeroeByIdAsync(3)
  .then((h) => console.log(`El Heroe es: ${h.name}`))
  .catch(console.error);
