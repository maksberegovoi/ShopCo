import React, { useState } from "react";
import styles from "./Search.module.css";
import sprite from "../../../assets/icons/sprite.svg";
import Svg from "../../UI/Svg/Svg.jsx";

const Search = ({ classname = "" }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    console.log("click");
    if (search.trim().length < 1) return;
    console.log(search);
  };
  console.log(styles.container);
  return (
    <div className={styles.container}>
      <button onClick={handleSearch}>
        <Svg href={`${sprite}#icon-search`} classname={styles.icon} />
      </button>
      <input
        className={styles.search}
        type="text"
        placeholder="Search for products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
    </div>
  );
};

export default Search;
