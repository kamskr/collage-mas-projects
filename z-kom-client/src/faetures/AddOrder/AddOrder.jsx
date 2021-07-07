import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../api";

export const AddOrder = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const [clients, setClients] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const clients = await api.getClients();
    setClients(clients.data);
    const products = await api.getProducts();
    setProducts(products.data);
    console.log(clients.data);
  };

  const onSubmit = async (data) => {
    const clientId = data.client;
    const productsData = products.filter((product) =>
      data.products.includes(product._id)
    );

    const totalPrice = productsData.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);

    const orderData = {
      clientId,
      products: productsData,
      totalPrice,
      deliveryCost: data.Delivery_cost,
    };

    const res = await api.addOrder(orderData);
    if (res.status === 200) {
      history.push("/");
    } else {
      console.log("adding failed");
    }
  };

  return (
    <div className="add-product-container">
      <h1>Z-kom</h1>
      <h2>Add order</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("client")} name="client">
          <option value="">Select client</option>
          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name} {client.surname}
            </option>
          ))}
        </select>
        <h3>Choose products</h3>
        <select
          {...register("products")}
          name="products"
          multiple
          style={{ height: "200px", padding: "10px 0" }}
        >
          {products.map((product) => (
            <option key={product._id} value={product._id}>
              {product.name}
            </option>
          ))}
        </select>
        <Input
          label="Delivery_cost"
          type="number"
          register={register}
          required
        />

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
