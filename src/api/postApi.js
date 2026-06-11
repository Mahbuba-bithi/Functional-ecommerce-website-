import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const getAllCountries = () => {
  return api.get("/all?fields=name,capital,population,flags");
};

export const getCountryIndviData = (name) => {
  return api.get(
    `/name/${name}?fields=name,capital,population,flags,region,subregion,languages,currencies`
  );
};
