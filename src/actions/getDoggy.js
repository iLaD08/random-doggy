import axios from "axios";

const getDoggy = ({ setDoggy }) => {
  axios
    .get("https://api.thedogapi.com/v1/images/search")
    .then((res) => {
      setDoggy({
        name: res.data[0].breeds[0].name,
        picture: res.data[0].url,
      });
    })
    .catch((err) => console.error(err));
};

export default getDoggy;
