export const formatChartUrl = (icon: string): string => {
  const id = icon.split('/')[5];
  return `https://www.coingecko.com/coins/${id}/sparkline`;
};
