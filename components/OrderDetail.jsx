import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/OrderDetail.module.scss";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const cart = useSelector((state) => state.cart);

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };
  return (
    <div className={styles.orderDetailsContainer}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>You will pay ${cart.total} after delivery</h1>
        <div className={styles.item}>
          <label className={styles.label}> Name Surname</label>
          <input
            type="text"
            placeholder="John Doe"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Phone Number</label>
          <input
            type="text"
            placeholder="+1 234 567 89"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Address</label>
          <textarea
            rows={5}
            placeholder="Elton St. 505 NY"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Order
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
