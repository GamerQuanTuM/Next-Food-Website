import React, { useEffect, useState } from "react";
import styles from "../styles/Cart.module.scss";
import Image from "next/image";

const Cart = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoader(false);
    }
  }, []);

  if (!loader) setLoader(true);
  return (
    <div className={styles.cartContainer}>
      <div className={styles.leftContainer}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tr}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/Images/pizza.png"
                    alt=""
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>
                  Double ingredients, Spicy sauce
                </span>
              </td>
              <td>
                <span className={styles.price}>$19.00</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>$50.00</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
