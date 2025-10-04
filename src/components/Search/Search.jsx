import React, { useState } from "react";
import styles from "./Search.module.scss";
import sprite from "../../../assets/icons/sprite.svg";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    if (search.trim().length < 1) return;
  };

  return (
    <div className={styles.container}>
      <button onClick={handleSearch}>
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-search`}></use>
        </svg>
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
