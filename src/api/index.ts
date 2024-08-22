import axios from "axios";

export const API = axios.create({
  baseURL: "https://dummy-api-topaz.vercel.app",
});

export const RESOURSES = {
  GET_PORTFOLIO: "/portfolio",
  GET_INSTRUMENTS: "/instruments",
  SEARCH_ACTIVES: "/search",
  CREATE_ORDER: "/orders",
};
