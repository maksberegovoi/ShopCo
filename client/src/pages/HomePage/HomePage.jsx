import React from "react";
import styles from "./HomePage.module.scss";
import Categories from "../../components/Categories/Categories.jsx";
import MyButton from "../../UI/MyButton/MyButton.jsx";
import Hero from "./Hero/Hero.jsx";

const HomePage = () => {
  return (
    <main className={"container"}>
      <Hero />
      <section>
        <Categories />
      </section>
    </main>
  );
};

export default HomePage;
