import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Footer from "../../Components/footer";
import Navbar from "../../Components/navbar";
import styles from "../../styles/select.module.css";

const Select = () => {
  const router = useRouter();
  const [mode, setMode] = useState(null);
  const handleClick = () => {
    mode === "email"
      ? router.push(`/preview-email`)
      : router.push(`/preview-pdf`);
  };
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
            <input
              type="checkbox"
              name="print"
              value="print"
              onChange={(e) => setMode(e.target.value)}
            />
            Print
            <input
              type="checkbox"
              name="email"
              value="email"
              onChange={(e) => setMode(e.target.value)}
            />{" "}
            Email
          </div>
        </div>
        <div>
          <button className={styles.previewBtn} onClick={handleClick}>
            See Preview
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Select;
