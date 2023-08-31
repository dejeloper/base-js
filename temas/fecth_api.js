const apiKey = "tqSBWQzPC9KRqAbvnXnDQKPFcDcYjU2q";

const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

// fetch(url)
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((error) => console.log(error));

fetch(url)
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    // const img = document.createElement("img");
    // img.src = url;
    // document.body.append(img);
  });
