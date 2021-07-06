import { object, string, ref, number, array } from "yup";

export const createEmployeeSchema = object({
  body: object({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
    password: string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
    passwordConfirmation: string().oneOf(
      [ref("password"), null],
      "Passwords must match"
    ),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
    salary: number().required("Salary is required").min(2000),
    trainings: array().of(string()).required("Trainings are required"),
    specialisation: string().required("Specialisation is required"),
  }),
});

export const createEmployeeSessionSchema = object({
  body: object({
    password: string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum.")
      .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),
    email: string()
      .email("Must be a valid email")
      .required("Email is required"),
  }),
});
