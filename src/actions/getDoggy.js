import axios from "axios";

const getDoggy = ({ setDoggy, setLoading }) => {
  axios
    .get("https://api.thedogapi.com/v1/images/search")
    .then((res) => {
      setDoggy({
        name: res.data[0].breeds[0].name,
        picture: res.data[0].url,
      });
      setLoading(false);
    })
    .catch(() => {
      console.log("error");
      axios.get("https://api.thedogapi.com/v1/images/search").then((res) => {
        setDoggy({
          name: res.data[0].breeds[0].name,
          picture: res.data[0].url,
        });
        setLoading(false);
      });
    });
};

export default getDoggy;
