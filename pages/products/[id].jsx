import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
import styles from "../../styles/Products.module.scss";


export async function getServerSideProps({ params }) {
  const { data } = await axios(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      product: data,
    },
  };
}

const Products = ({ product }) => {
  const [size, setSize] = useState(0);
  const [price, setPrice] = useState(product.prices[0]);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleSize = (sizeIndex) => {
    const difference = product.prices[sizeIndex] - product.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;
    console.log(e);

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  const handleClick = ()=>{
    dispatch(addProduct({...product,extras,price,quantity}));
  }


  return (
    <div className={styles.productContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.imgContainer}>
          <Image src={product.image} alt="" layout="fill" objectFit="contain" />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <h1 className={styles.title}>{product.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => handleSize(0)}>
            <Image src="/Images/size.png" alt="" layout="fill" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(1)}>
            <Image src="/Images/size.png" alt="" layout="fill" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => handleSize(2)}>
            <Image src="/Images/size.png" alt="" layout="fill" />
            <span
              style={{
                right: "-20px",
                width: "60px",
                textAlign: "center",
                padding: "0px",
              }}
              className={styles.number}
            >
              Large
            </span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {product.extraOptions.map((option) => {
            return (
              <div key={option._id}>
                <div className={styles.option}>
                  <input
                    type="checkbox"
                    name={option.text}
                    id={option.text}
                    className={styles.checkbox}
                    onChange={(e) => handleChange(e, option)}
                  />
                  <label htmlFor="double">{option.text}</label>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.add}>
          <input onChange={(e)=>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button} onClick={handleClick}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
