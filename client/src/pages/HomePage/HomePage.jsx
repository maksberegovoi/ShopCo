import React from "react";
import styles from "./HomePage.module.scss";
import Categories from "../../components/Categories/Categories.jsx";

const HomePage = () => {
  const categories = [{ name: "New Arrival" }, { name: "Top Sale" }];
  return (
    <main className={"container"}>
      <section className={styles.hero}>
        <h1>HERO TITLE</h1>
        <div>CONTENT</div>
      </section>
      <Categories />
    </main>
  );
};

export default HomePage;
