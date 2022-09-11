import React from "react";
import styles from "../../styles/previous.module.css";

const Previous = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h3>My Request History</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Letter Catagory</th>
              <th>Letter Type</th>
              <th>Request Date</th>
              <th>Request For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Category A</td>
              <td>Type A</td>
              <td>5555-55-55</td>
              <td>ABCD</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Previous;
