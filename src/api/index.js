import axios from "axios";

const API_URL = "https://salty-forest-50779.herokuapp.com/";

export const get_image = (send) => {
  let url = API_URL + "getimage/" + send;
  var str = "";
  return axios
    .get(url, {
      headers: { "Content-Type": "application/json" },
    })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
