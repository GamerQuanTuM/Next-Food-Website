import React from "react";
import styles from "../styles/ProductList.module.scss";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className={styles.productListContainer}>
      <h1 className={styles.title}>Lorem ipsum dolor sit.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
        neque illo culpa iste expedita praesentium recusandae nam animi, fuga
        iure, fugit voluptas et voluptatibus numquam quasi minima,
        necessitatibus at. Commodi rerum mollitia blanditiis magnam id!
      </p>
      <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductList;
