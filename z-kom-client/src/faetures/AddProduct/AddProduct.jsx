import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../api";
import "./AddProduct.styles.css";

export const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const productData = {
      name: data.Name,
      companyName: data.Brand,
      price: data.Price,
      state: data.State,
      additionalInfo: data.Additional_info,
      countryOrigin: data.Country_of_origin,
      weight: data.Weight,
      sizes: data.Sizes,
    };
    console.log(productData);
    const res = await api.addProduct(productData);
    if (res.status === 200) {
      history.push("/");
    } else {
      console.log("adding failed");
    }
    console.log(res);
  };

  return (
    <div className="add-product-container">
      <h1>Z-kom</h1>
      <h2>Add product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-container">
          <Input label="Name" register={register} required />
        </div>
        <div className="input-container">
          <Input label="Brand" register={register} required />
        </div>
        <div className="input-container">
          <Input label="Price" register={register} type="number" required />
        </div>
        <div className="input-container">
          <Input label="State" register={register} required />
        </div>
        <div className="input-container">
          <Input label="Country_of_origin" register={register} required />
        </div>
        <div className="input-container">
          <Input label="Weight" type="number" register={register} required />
        </div>
        <div className="input-container">
          <Input label="Sizes" register={register} required />
        </div>
        <div className="input-container">
          <Input
            label="Additional_info"
            register={register}
            type="textfield"
            required
          />
        </div>
        <div className="link-cancel-container">
          <Link to="/" className="link-cancel">
            Cancel
          </Link>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
