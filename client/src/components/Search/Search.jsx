import React from 'react';
import styles from './Search.module.css';
import searchIcon from '../../../assets/icons/search.svg'



const Search = () => {
  return (
    <div className={styles.container}>
      <img
        src={searchIcon}
        alt="search"
      />
      <input className={styles.search} type="text" placeholder='Search for products...'/>
    </div>
  );
};

export default Search;