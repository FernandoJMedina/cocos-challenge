import { useQuery } from "@tanstack/react-query";
import { TransactionsService } from "../../services/transactions";
import { TRANSACTIONS_KEYS } from "../keys/transaction-keys";

export function useInstruments() {
  return useQuery({
    queryKey: TRANSACTIONS_KEYS.GET_INSTRUMENTS,
    queryFn: TransactionsService.getInstruments,
  });
}
