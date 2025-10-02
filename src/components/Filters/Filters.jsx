import React from "react";
import styles from "./Filters.module.scss";
import Accordion from "../Accordion/Accordion.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import StyleFilter from "./StyleFilter/StyleFilter.jsx";
import SizeFilter from "./SizeFilter/SizeFilter.jsx";
import ColorFilter from "./ColorFilter/ColorFilter.jsx";
import PriceFilter from "./PriceFilter/PriceFilter.jsx";
import TypeFilter from "./TypeFilter/TypeFilter.jsx";

const Filters = () => {
  return (
    <div className={styles.filterBox}>
      <h5>Filters</h5>
      <Accordion title={"Type"}>
        <TypeFilter />
      </Accordion>
      <Accordion title={"Price"}>
        <PriceFilter />
      </Accordion>
      <Accordion title={"Colors"}>
        <ColorFilter />
      </Accordion>
      <Accordion title={"Size"}>
        <SizeFilter />
      </Accordion>
      <Accordion title={"Dress Style"}>
        <StyleFilter />
      </Accordion>

      {/* Colors */}
      {/*<div className={styles.section}>*/}
      {/*  <span className={styles.label}>Colors</span>*/}
      {/*  <div className={styles.colors}>*/}
      {/*    {[*/}
      {/*      "blue",*/}
      {/*      "red",*/}
      {/*      "yellow",*/}
      {/*      "orange",*/}
      {/*      "green",*/}
      {/*      "purple",*/}
      {/*      "pink",*/}
      {/*      "black",*/}
      {/*      "white",*/}
      {/*    ].map((c, i) => (*/}
      {/*      <button*/}
      {/*        key={i}*/}
      {/*        className={`${styles.colorCircle} ${styles[c]}`}*/}
      {/*      ></button>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Sizes */}
      {/*<div className={styles.section}>*/}
      {/*  <span className={styles.label}>Size</span>*/}
      {/*  <div className={styles.sizes}>*/}
      {/*    {[*/}
      {/*      "XX-Small",*/}
      {/*      "X-Small",*/}
      {/*      "Small",*/}
      {/*      "Medium",*/}
      {/*      "Large",*/}
      {/*      "X-Large",*/}
      {/*      "XX-Large",*/}
      {/*      "3X-Large",*/}
      {/*      "4X-Large",*/}
      {/*    ].map((s, i) => (*/}
      {/*      <button*/}
      {/*        key={i}*/}
      {/*        className={`${styles.sizeBtn} ${*/}
      {/*          s === "Large" ? styles.activeSize : ""*/}
      {/*        }`}*/}
      {/*      >*/}
      {/*        {s}*/}
      {/*      </button>*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Dress Style */}
      {/*  <div className={styles.section}>*/}
      {/*    <details>*/}
      {/*      <summary className={styles.summary}>Dress Style</summary>*/}
      {/*      <ul className={styles.list}>*/}
      {/*        <li>Casual</li>*/}
      {/*        <li>Formal</li>*/}
      {/*        <li>Party</li>*/}
      {/*        <li>Gym</li>*/}
      {/*      </ul>*/}
      {/*    </details>*/}
      {/*  </div>*/}

      <MyButton>Apply Filter</MyButton>
    </div>
  );
};

export default Filters;
