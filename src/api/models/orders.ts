type BaseOrderRequest = {
  instrument_id: number;
  quantity: number;
};

export type BuyOrderRequest = BaseOrderRequest & {
  side: "BUY";
  type: "MARKET";
};

export type SellOrderRequest = BaseOrderRequest & {
  side: "SELL";
  type: "LIMIT";
  price: number;
};

export type OrderRequest = BuyOrderRequest | SellOrderRequest;

type StatusOrderResponse = "PENDING" | "REJECTED" | "FILLED";

export type OrderResponse = {
  id: number;
  status: StatusOrderResponse;
};
