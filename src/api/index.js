import axios from "axios";

const API_URL = "https://aiaflickerbackend.herokuapp.com/";

export const get_image = (send) => {
  let url = API_URL + "getimage/" + send;
  var str = "";
  return axios
    .get(url)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
