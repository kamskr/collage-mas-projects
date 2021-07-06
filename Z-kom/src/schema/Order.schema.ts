import { array, object, string, number } from "yup";

const payload = {
  body: object({
    clientId: string().required("Client ID is required"),
    products: array()
      .of(
        object().shape({
          name: string().required("Name is required"),
          companyName: string().required("Company name is required"),
          price: number().required("Price is required"),
          state: string().required("State is required"),
          additionalInfo: string().required("Additiona info is required"),
          countryOrigin: string().required("Country of origin is required"),
          weight: number().required("Weight is required"),
          sizes: string().required("Sizes are required"),
        })
      )
      .required("Products are required"),
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
