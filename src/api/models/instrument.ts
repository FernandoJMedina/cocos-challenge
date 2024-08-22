export interface Instrument {
  id: number;
  ticker: string;
  name: string;
  type: InstrumentType;
  last_price: number;
  close_price: number;
}

export type InstrumentType = "ACCIONES" | "MONEDA";
