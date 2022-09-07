import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import { HiMail } from "react-icons/hi";
import { ImFolderDownload } from "react-icons/im";
import styles from "../../styles/generate.module.css";
import Link from "next/link";

const Generate = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.generator}>
          <h1>Letter Generated</h1>

          <button className={styles.emailBtn}>
            <HiMail className={styles.gomail} /> Email
          </button>
          <button className={styles.downloadBtn}>
            <ImFolderDownload className={styles.imfolder} />
            Download
          </button>
        </div>
        <div className={styles.backButton}>
          <Link href={`/`}>
            <button className={styles.backHome}>Go Back Home</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Generate;
