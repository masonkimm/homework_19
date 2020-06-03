import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=5000";
const APIKEY = "";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
