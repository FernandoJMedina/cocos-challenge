import { API, RESOURSES } from "..";
import { Instrument } from "../models/instrument";
import { OrderRequest, OrderResponse } from "../models/orders";
import { Portfolio } from "../models/portfolio";

export async function getPortfolio() {
  const { data } = await API.get<Portfolio[]>(RESOURSES.GET_PORTFOLIO);
  return data;
}

export async function getInstruments() {
  const { data } = await API.get<Instrument[]>(RESOURSES.GET_INSTRUMENTS);
  return data;
}

export async function searchActives(query: string) {
  const { data } = await API.get<Instrument[]>(RESOURSES.SEARCH_ACTIVES, {
    params: { query },
  });

  return data;
}

export async function createOrder(request: OrderRequest) {
  const { data } = await API.post<OrderResponse>(RESOURSES.CREATE_ORDER, {
    data: request,
  });
  return data;
}

export const TransactionsService = {
  getInstruments,
  getPortfolio,
  searchActives,
  createOrder,
};
