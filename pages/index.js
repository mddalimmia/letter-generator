import Head from "next/head";
import Footer from "../Components/footer";
import Link from "next/link";
import { useState, useRef } from "react";
import Navbar from "../Components/navbar";
import styles from "../styles/Home.module.css";
import Submit from "../Components/Submit";
import data from "../Mock/data";

export default function Home() {
  const scrollToRef = useRef();
  const [component, setComponent] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Letter Generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.body}>
        <div className={styles.topWrapper}>
          <div className={styles.actions}>
            <button
              className={styles.submitBtn}
              onClick={() => {
                setComponent(true);
                scrollToRef.current.scrollIntoView();
              }}
            >
              Submit New Letter
            </button>
            <button className={styles.previewBtn}>View Previewes</button>
            <button className={styles.setBtn}>Set Up</button>
            <button className={styles.castBtn}>Admin Cast</button>
          </div>
          <div className={styles.history}>
            <h2>My Letter History</h2>
          </div>
        </div>
        <div className={styles.bottomWrapper} ref={scrollToRef}>
          {component === true ? <Submit /> : null}
        </div>
      </div>
      <Footer />
    </div>
  );
}
