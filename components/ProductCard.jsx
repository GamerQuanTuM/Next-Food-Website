import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";
import React from "react";

const ProductCard = (props) => {
  const { products } = props;
  return (
    <React.Fragment>
      <div className={styles.productCardContainer}>
        <Link href={`/products/${products._id}`} passHref>
          <a><Image src={products?.image} alt="img" width="500" height="500" /></a>
        </Link>
        <h1 className={styles.title}>{products?.title}</h1>
        <span className={styles.price}>${products?.prices[0]}</span>
        <p className={styles.desc}>{products?.description}</p>
      </div>
    </React.Fragment>
  );
};

export default ProductCard;
