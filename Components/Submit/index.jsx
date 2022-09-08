import React from "react";
import styles from "../../styles/submit.module.css";
import Items from "../items";

const Submit = () => {
  const data = [
    {
      id: "a",
      categorie: "Category A",
      title: "Category A will display Here",
    },
    {
      id: "b",
      categorie: "Category B",
      title: "Category B will display Here",
    },
    {
      id: "c",
      categorie: "Category C",
      title: "Category C will display Here",
    },
    {
      id: "d",
      categorie: "Category D",
      title: "Category D will display Here",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.submitNew}>Submit New Letter</h1>
        <div className={styles.categories}>
          {data.map((details) => {
            return <Items key={details.id} details={details} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Submit;
