import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.styles.css";

export const Login = () => {
  const { login } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    login(data.Login, data.Password);
  };
  return (
    <div className="login-container">
      <h1>Z-kom</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Login" register={register} required />
        <Input label="Password" register={register} type="password" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
