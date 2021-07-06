import { Request, Response } from "express";
import { get } from "lodash";
import {
  createProduct,
  findProduct,
  findProducts,
} from "../service/Product.service";
import log from "../logger";

export const createProductHandler = async (req: Request, res: Response) => {
  try {
    const product = await createProduct(req.body);
    return res.send(product.toJSON());
  } catch (error) {
    log.error(error.message);
    return res.status(409).send(error.message);
  }
};

export const getProductHandler = async (req: Request, res: Response) => {
  const productId = get(req, "params.productId");
  console.log(productId);
  const product = await findProduct({ _id: productId });

  if (!product) {
    return res.sendStatus(404);
  }

  return res.send(product);
};

export const getProductsHandler = async (req: Request, res: Response) => {
  const products = await findProducts({});

  if (!products) {
    return res.sendStatus(404);
  }

  return res.send(products);
};
