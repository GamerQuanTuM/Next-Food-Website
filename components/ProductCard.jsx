import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = (props) => {
  const { products } = props;
  return (
    <div className={styles.productCardContainer}>
      <Link href={`/products/${products._id}`} passHref>
        <Image src={products?.image} alt="img" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{products?.title}</h1>
      <span className={styles.price}>${products?.prices[0]}</span>
      <p className={styles.desc}>{products?.description}</p>
    </div>
  );
};

export default ProductCard;
