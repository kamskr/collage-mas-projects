import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../api";
import "./ShowOrders.styles.css";

export const ShowOrders = () => {
  const [clients, setClients] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const clients = await api.getClients();
    setClients(clients.data);
  };

  const handleClientChange = (e) => {
    getOrders(e.target.value);
  };

  const getOrders = async (clientId) => {
    if (!clientId) return;
    const orders = await api.getOrderByClient(clientId);
    setOrders(orders.data);
  };

  const showOrderDetails = (order) => {
    setCurrentOrder(order);
    setShowModal(true);
  };
  const closeModal = () => {
    setCurrentOrder(null);
    setShowModal(false);
  };

  return (
    <div className="show-orders-container">
      <h1>Z-kom</h1>
      <h2>Show orders</h2>
      <div>
        <select name="client" onChange={handleClientChange}>
          <option value="">Select client</option>
          {clients.map((client) => (
            <option key={client._id} value={client._id}>
              {client.name} {client.surname}
            </option>
          ))}
        </select>

        <div className="show-orders-content">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div
                className="order-item-container"
                key={order._id}
                onClick={() => showOrderDetails(order)}
              >
                <h3>Order ID: {order._id}</h3>
              </div>
            ))
          ) : (
            <h3>There is no orders for that client</h3>
          )}
        </div>

        <div className="link-cancel-container">
          <Link to="/" className="link-cancel">
            Return
          </Link>
        </div>
      </div>

      {showModal && currentOrder && (
        <>
          <div className="simple-modal">
            <div className="modal-content">
              <span className="cross-icon" onClick={closeModal}>
                x
              </span>
              <h2>Order details</h2>
              <hr />
              <div>
                <p>Order ID: ${currentOrder._id}</p>
                <p>Products:</p>
                {currentOrder.products.map((product) => (
                  <p key={product._id}>{product.name} </p>
                ))}
                <p style={{ marginTop: "40px" }}>
                  Created at: {currentOrder.createdAt}
                </p>
                <p>
                  Total price with delivery costs:{" "}
                  {currentOrder.totalPrice + currentOrder.deliveryCost} PLN
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
