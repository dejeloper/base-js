import api from "./axios.js";

const getImage = async () => {
  try {
    const random = await api.get("/random");
    const { data } = random.data;
    const { url } = data.images.original;

    console.log(url);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

getImage();
