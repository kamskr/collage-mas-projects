import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import "./Login.styles.css";

export const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <div className="login-container">
      <h1>Z-kom</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Login" register={register} required />
        <Input label="Password" register={register} required />
      </form>
    </div>
  );
};
