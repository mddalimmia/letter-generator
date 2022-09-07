import Link from "next/link";
import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import styles from "../../styles/signup.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <h1>Register Your Accout</h1>
        <div className={styles.nameWrapper}>
          <div className={styles.name}>
            <label>Full Name</label>
            <input placeholder="Enter Your Full Name" />
          </div>
          <div className={styles.department}>
            <label>Department</label>
            <input placeholder="Department" />
          </div>
        </div>
        <div className={styles.address}>
          <label>Address</label>
          <input placeholder="Enter Your Address" />
        </div>
        <div className={styles.email}>
          <label>Email Address</label>
          <input placeholder="Enter Your Full Name" />
        </div>
        <div className={styles.username}>
          <label>Username</label>
          <input placeholder="Username" />
        </div>
        <div className={styles.password}>
          <label>Password</label>
          <input placeholder="Password" />
        </div>
        <div className={styles.confirm}>
          <label>Confirm Password</label>
          <input placeholder="Password" />
        </div>
        <Link href={`/login`}>
          <button className={styles.regButton}>Register</button>
        </Link>
      </div>
      <div className={styles.existAccount}>
        <p>Already Have an Account?</p>
        <Link href={`/login`}>
          <p className={styles.log}>Login Instead</p>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default index;
