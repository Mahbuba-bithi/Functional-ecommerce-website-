// postApi.js — /api দিয়েই রাখো
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const getAllCountries = async () => {
  const response = await api.get("/all?fields=name,capital,population,flags");
  return response.data;
};

export const getCountryIndvData = async (name) => {
  const response = await api.get(
    `/name/${encodeURIComponent(name)}?fields=name,capital,population,flags,region,subregion,languages,currencies`
  );
  return response.data[0];
};