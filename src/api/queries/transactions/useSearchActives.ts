import { useQuery } from "@tanstack/react-query";
import { TransactionsService } from "../../services/transactions";
import { TRANSACTIONS_KEYS } from "../keys/transaction-keys";

export function useSearchActives(query: string) {
  return useQuery({
    queryKey: TRANSACTIONS_KEYS.SEARCH_ACTIVES(query),
    queryFn: () => TransactionsService.searchActives(query),
  });
}
