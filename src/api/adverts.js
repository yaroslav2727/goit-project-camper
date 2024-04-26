import axios from "axios";

export const LIMIT_PER_PAGE = 4;

axios.defaults.baseURL = "https://662a2b3c67df268010a2dacb.mockapi.io/adverts";

export const fetchAdverts = async (page = 1) => {
  const data = await axios.get(`/?page=${page}&limit=${LIMIT_PER_PAGE}`);
  return data;
};
