import { array, object, string, number } from "yup";

const payload = {
  body: object({
    clientId: string().required("Client ID is required"),
    products: array().of(string()).required("Products are required"),
    totalPrice: number().required("Total Price is required"),
    deliveryCost: number().required("Delivery cost is required"),
  }),
};

const params = {
  params: object({
    postId: string().required("postId is required"),
  }),
};

export const createOrderSchema = object({
  ...payload,
});

export const updateOrderSchema = object({
  ...params,
  ...payload,
});

export const deleteOrderSchema = object({
  ...params,
});
