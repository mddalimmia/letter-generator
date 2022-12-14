import React from "react";
import Link from "next/link";
import styles from "../../styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainWrapper}>
        <div className={styles.logoImage}>
          <Link href={`/`}>
            <h1 className={styles.logo}>Generator</h1>
          </Link>
        </div>
        <div className={styles.buttonContainer}>
          <Link href={`/login`}>
            <button className={styles.logBtn}>Login</button>
          </Link>
          <Link href={`/signup`}>
            <button className={styles.signBtn}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
