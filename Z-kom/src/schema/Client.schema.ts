import { object, string } from "yup";

export const createClientSchema = object({
  body: object({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
    address: object().shape({
      street: string().required("Street is required"),
      city: string().required("City is required"),
      houseNumber: string().required("House number is required"),
    }),
  }),
});
