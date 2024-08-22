import { useMutation } from "@tanstack/react-query";
import { OrderRequest } from "../../models/orders";
import { TransactionsService } from "../../services/transactions";

export function useCreateOrder() {
  return useMutation({
    mutationFn: (data: OrderRequest) => TransactionsService.createOrder(data),
  });
}
