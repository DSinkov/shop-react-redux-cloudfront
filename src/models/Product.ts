import * as Yup from 'yup';

export type Product = {
  id: string,
  title: string,
  price: number,
  img: string
  description?: string,
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string(),
  img: Yup.string().url(),
  count: Yup.number(),
  price: Yup.number().required(),
});
