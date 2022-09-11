import React, { useEffect } from "react";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/item.module.css";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const Items = ({ value }) => {
  const data = [
    {
      id: "a",
      categorie: "Category A",
      type: "Type A",
    },
    {
      id: "b",
      categorie: "Category B",
      type: "Type B",
    },
    {
      id: "c",
      categorie: "Category C",
      type: "Type C",
    },
    {
      id: "d",
      categorie: "Category D",
      type: "Type D",
    },
    {
      id: "e",
      categorie: "Category D",
      type: "Type D",
    },
    {
      id: "f",
      categorie: "Category C",
      type: "Type C",
    },
    {
      id: "g",
      categorie: "Category E",
      type: "Type E",
    },
  ];

  const [entry, setEntry] = useState(value);

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles.bar} onClick={handleClick}>
        <p className={styles.catagory}>{value}</p>
        {active
          ? data
              .filter((base) => {
                return base.categorie === entry;
              })
              .map((letter, id) => {
                return (
                  <div
                    className={styles.items}
                    key={id}
                    onClick={() => {
                      router.push({
                        pathname: `/select-inputs`,
                        query: { path: letter.id },
                      });
                    }}
                  >
                    <p className={styles.pp}>{letter.type}</p>
                  </div>
                );
              })
          : null}
      </div>
    </div>
  );
};

export default Items;
