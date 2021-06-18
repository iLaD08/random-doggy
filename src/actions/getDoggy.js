import axios from "axios";

const getDoggy = ({ setDoggy, setLoading }) => {
  axios
    .get("https://api.thedogapi.com/v1/images/search")
    .then((res) => {
      setDoggy(res.data[0].url);
      setLoading(false);
    })
    .catch((err) => console.log(err));
};

export default getDoggy;
