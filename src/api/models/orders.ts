type SideType = "BUY" | "SELL";

type BaseOrderRequest = {
  instrument_id: number;
  side: SideType;
  quantity: number;
};

type MarketOrderRequest = BaseOrderRequest & {
  type: "MARKET";
};

type LimitOrderRequest = BaseOrderRequest & {
  type: "LIMIT";
  price: number;
};

export type OrderRequest = MarketOrderRequest | LimitOrderRequest;

type StatusOrderResponse = "PENDING" | "REJECTED" | "FILLED";

export type OrderResponse = {
  id: number;
  status: StatusOrderResponse;
};
