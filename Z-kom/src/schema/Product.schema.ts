import { object, string, number } from "yup";

export const createProductSchema = object({
  body: object({
    name: string().required("Name is required"),
    companyName: string().required("Company name is required"),
    price: number().required("Price is required"),
    state: string().required("State is required"),
    additionalInfo: string().required("Additiona info is required"),
    countryOrigin: string().required("Country of origin is required"),
    weight: number().required("Weight is required"),
    sizes: string().required("Sizes are required"),
  }),
});
