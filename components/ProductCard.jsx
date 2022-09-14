import React from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = () => {
  return (
    <div className={styles.productCardContainer}>
      <Image src="/Images/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>Home for Food Lovers</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        neque illo culpa iste expedita praesentium..
      </p>
    </div>
  );
};

export default ProductCard;
