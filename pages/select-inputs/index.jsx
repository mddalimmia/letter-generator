import Link from "next/link";
import React from "react";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import styles from "../../styles/select.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.inputs}>
          <h2>Select Options</h2>
          <div className={styles.company}>
            <div className={styles.companyLabel}>
              <label>Company</label>
            </div>
            <select className={styles.selected}>
              <option value="optiona">Option A</option>
              <option value="optionb">Option B</option>
            </select>
          </div>
          <div className={styles.branch}>
            <div className={styles.branchLabel}>
              <label>Branch</label>
            </div>
            <select className={styles.selected}>
              <option value="brancha">Branch A</option>
              <option value="branchb">Branch B</option>
            </select>
          </div>
          <div className={styles.mode}>
            <label>Mode</label>
            <input type="checkbox" /> Print
            <input type="checkbox" /> Email
          </div>
        </div>
        <div>
          <Link href={`/preview`}>
            <button className={styles.previewBtn}>See Preview</button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
