import { Product } from '../models/Product';

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);


export const getPrices = ((product: Product): string => {
  const priceInUSD: string = priceFormatter.format(product.price);
  if(!product.localPrices) return priceInUSD;

  return product.localPrices.reduce((acc, item) => {
    return acc + ' / ' + new Intl.NumberFormat('en-US', { style: 'currency', currency: Object.keys(item)[0] }).format(Object.values(item)[0]);
  }, priceInUSD);
});
