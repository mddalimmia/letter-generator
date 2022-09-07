import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/login.module.css";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";

const Login = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Navbar />
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
        <div className={styles.logButton}>
          <Link href={`/category`}>
            <button className={styles.btn}>Login</button>
          </Link>
        </div>

        <div className={styles.register}>
          <p>Dont Have an Account?</p>
          <Link href={`/signup`}>
            <p className={styles.registration}>Register Now</p>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
