console.log("Inicio");

new Promise((resolve, reject) => {
  console.log("Cuerpo de la promesa");
  //resolve("Resolviendo promesa - Ok");
  reject("Rechazando promesa - Mal");
})
  // .then((msj) => console.log(msj))
  // .catch((err) => console.error(err));
  .catch(console.error);

console.log("Fin");
