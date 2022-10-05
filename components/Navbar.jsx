import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/Navbar.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.item}>
        {/* hanburger */}
        <div className={styles.hamburger}>
          <GiHamburgerMenu
            onClick={() => setToggle(!toggle)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className={styles.callButton}>
          <Image src="/Images/telephone.png" alt="" height="32" width="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012 3450 6550</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={toggle ? styles.mobile : styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>HomePage</li>
          </Link>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/Images/logo.png" alt="" height="86px" width="160px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart" passHref>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/Images/cart.png" alt="" height="30px" width="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
