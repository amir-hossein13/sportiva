export const formatCurrency = (value: number): string => {
  const tomanValue = value / 10; // Convert Rial to Toman
  return new Intl.NumberFormat('fa-IR').format(tomanValue) + ' تومان';
};
