import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  price: number,
  img: string
  description?: string,
  localPrices?: Record<string, number>[]
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  price: Yup.number().required(),
});
