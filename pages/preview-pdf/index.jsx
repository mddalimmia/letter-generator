import Link from "next/link";
import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import styles from "../../styles/preview-pdf.module.css";

const Pdf = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.mode}>
        <h1>Preview Mode</h1>
        <h3>Pdf</h3>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.preview}></div>
      </div>
      <div className={styles.generate}>
        <Link href={`/generate`}>
          <button className={styles.generateBtn}>Generate Letter</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Pdf;