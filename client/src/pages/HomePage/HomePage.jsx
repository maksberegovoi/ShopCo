import React from "react";
import styles from "./HomePage.module.scss";
import Categories from "../../components/Categories/Categories.jsx";

const HomePage = () => {
  return (
    <main className={"container"}>
      <section className={styles.hero}>
        <h1>HERO TITLE</h1>
        <div>CONTENT</div>
      </section>
      <section>
        <Categories />
      </section>
    </main>
  );
};

export default HomePage;
