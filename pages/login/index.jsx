import React from "react";
import Link from "next/link";
import styles from "../../styles/login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Login to Your Account</h1>
        <div className={styles.userName}>
          <label>Username</label>
          <input placeholder="Username" />
        </div>
        <div className={styles.passWord}>
          <label>Password</label>
          <input placeholder="Password" />
        </div>
        <button className={styles.btn}>Login</button>
        <div className={styles.register}>
          <p>Dont Have an Account?</p>
          <Link href={`/signup`}>
            <p className={styles.registration}>Register Now</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
