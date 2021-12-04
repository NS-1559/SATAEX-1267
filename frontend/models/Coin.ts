export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: {
    small: string;
    large: string;
    thumb: string;
  };
  marketData: {
    currentPrice: {
      usd: number;
    };
    marketCap: {
      usd: number;
      btc: number;
    };
    totalVolume: {
      usd: number;
      btc: number;
    };
    high24H: {
      usd: number;
      btc: number;
    };
    low24H: {
      usd: number;
      btc: number;
    };
    priceChange24H: number;
    priceChangePercentage24H: number;
    priceChangePercentage14D: number;
    priceChangePercentage30D: number;
    priceChangePercentage60D: number;
    priceChangePercentage200D: number;
    priceChangePercentage1Y: number;
    marketCapChange24H: number;
    marketCapChangePercentage24H: number;
    priceChange24hInCurrency: {
      usd: number;
      btc: number;
    };
    priceChangePercentage1hInCurrency: {
      usd: number;
      btc: number;
    };
    priceChangePercentage24hInCurrency: {
      usd: number;
      btc: number;
    };
  };
}
