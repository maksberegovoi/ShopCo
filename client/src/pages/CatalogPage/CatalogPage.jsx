import React from "react";
import styles from "./CatalogPage.module.scss";
import Filters from "../../components/Filters/Filters.jsx";
import Catalog from "../../components/Catalog/Catalog.jsx";

const CatalogPage = () => {
  return (
    <section className={`${styles.container} container`}>
      <aside>
        <Filters />
      </aside>
      <main>
        <Catalog />
      </main>
    </section>
  );
};

export default CatalogPage;
