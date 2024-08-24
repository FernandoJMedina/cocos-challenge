export function currencyFormat(input: number) {
  return input.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
}
