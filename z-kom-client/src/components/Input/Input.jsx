import React from "react";
import "./Input.styles.css";

export const Input = ({ label, register, required, type }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required })} type={type} />
  </>
);
