export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
};

export const formatNumberWithSuffix = (value: number) => {
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const suffixNum = Math.floor(('' + value).length / 3);
  const shortValue = parseFloat(
    (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2),
  );
  if (shortValue % 1 != 0) {
    return shortValue.toFixed(1) + suffixes[suffixNum];
  }
  return shortValue + suffixes[suffixNum];
};

export const formatPriceChange = (value: number) => {
  const returnValue = value.toFixed(2);
  return `${value < 0 ? returnValue : `+${returnValue}`}%`;
};
