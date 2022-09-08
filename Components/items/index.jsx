import React from "react";
import { useState } from "react";
import styles from "../../styles/item.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Letters from "../letters";
const Items = ({ details }) => {
  const [active, SetActive] = useState(false);
  const handleClick = () => {
    SetActive(!active);
  };
  return (
    <div className={styles.container} key={details.id}>
      <div className={styles.bar} onClick={handleClick}>
        <p>{details.categorie}</p>
        <span>
          {active ? (
            <AiFillCaretUp className={styles.aifill} />
          ) : (
            <AiFillCaretDown className={styles.aifill} />
          )}
        </span>
      </div>
      <div className={styles.items}>
        {active ? <Letters details={details} /> : null}
      </div>
    </div>
  );
};

export default Items;
