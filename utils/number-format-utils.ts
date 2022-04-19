export function numToCurrency(val: number, currency = "usd"): string {
  const symbol = currency === "usd" ? "$" : "$";
  return `${symbol}${val.toFixed(2)}`;
}
