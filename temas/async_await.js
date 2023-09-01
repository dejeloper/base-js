const promesa = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola mundo desde la promesa con variable");
    }, 1000);
  });
};

console.log("Start");

const hola = await promesa();
console.log(hola);

console.log("End");
