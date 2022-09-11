import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Items from "../items";
import styles from "../../styles/submit.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Submit = ({ data }) => {
  const catagory = [
    ...new Set(
      data.map((list) => {
        return list.categorie;
      })
    ),
  ];
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      <div className={styles.wrapper}>
        <div className={styles.top}>
          <h4 className={styles.SubmitNew}>Submit New Request</h4>
        </div>
        <div className={styles.bottom}>
          {catagory.map((value, i) => {
            return (
              <>
                <Items key={i} value={value} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Submit;
