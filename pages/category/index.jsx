import Link from "next/link";
import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import styles from "../../styles/category.module.css";

const Category = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.category}>
          <div className={styles.selectCategory}>
            <label>Select a Category</label>
            <select className={styles.selectOption}>
              <option value="categorya">Category A</option>
              <option value="categoryb">Category B</option>
              <option value="categoryc">Category C</option>
              <option value="categoryd">Category D</option>
              <option value="categorye">Category E</option>
              <option value="categoryf">Category F</option>
            </select>
          </div>
          <div className={styles.templetes}>
            <div className={styles.example}>A</div>
            <div className={styles.example}></div>
            <div className={styles.example}></div>
            <div className={styles.example}></div>
            <div className={styles.example}></div>
            <div className={styles.example}></div>
          </div>
        </div>
        <div className={styles.continueBtn}>
          <Link href={`/select-inputs`}>
            <button className={styles.btn}>Continue</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
