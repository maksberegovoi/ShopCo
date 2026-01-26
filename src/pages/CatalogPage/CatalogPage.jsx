import React, { useEffect, useRef, useState } from "react";
import styles from "./CatalogPage.module.scss";
import Filters from "../../components/Filters/Filters.jsx";
import Loader from "../../UI/Loader/Loader.jsx";
import Error from "../../components/Error/Error.jsx";
import { useDeviceType } from "../../hooks/useDeviceType.js";
import { useFilters } from "../../hooks/useFilters/useFilters.js";
import { useGetAllProductsQuery } from "../../api/products/productsAPI.js";
import Pagination from "../../UI/Pagination/Pagination.jsx";
import Accordion from "../../components/Accordion/Accordion.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import Catalog from "../../components/Catalog/Catalog.jsx";

const CatalogPage = () => {
  const { isDesktop } = useDeviceType();
  const [page, setPage] = useState(1);
  const limit = isDesktop ? 9 : 6;
  const { filters, setSortBy } = useFilters();
  const { data, isLoading, isError } = useGetAllProductsQuery({
    page,
    limit,
    filters,
  });

  const [isFilters, setIsFilters] = useState(false);
  const isManualToggle = useRef(false);
  const toggleFilters = () => {
    isManualToggle.current = true;
    setIsFilters(!isFilters);
  };

  const [sortTitle, setSortTitle] = useState("Most popular");
  const handleSort = (e, sortBy) => {
    setSortTitle(e.target.textContent);
    setSortBy(sortBy);
  };

  useEffect(() => {
    setPage(1);
  }, [filters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    if (!isManualToggle.current) {
      setIsFilters(isDesktop);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (isFilters && !isDesktop) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilters, isDesktop]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;
  return (
    <section className={`container`}>
      <div className={styles.header}>
        <h3>
          {[filters.category, filters.style, filters.type]
            .filter(Boolean)
            .join(" • ") || "Catalog"}
        </h3>
        <div className={styles.headerContent}>
          <button
            className={styles.filters}
            onClick={toggleFilters}
            aria-label="toggle filters"
          >
            <svg className={styles.iconFilters}>
              <use href={`${sprite}#icon-filters`}></use>
            </svg>
          </button>
          <p>
            Showing {(page - 1) * limit + 1} –{" "}
            {Math.min(page * limit, data.total)} of {data.total} products
          </p>
          <div className={styles.sort}>
            <p>Sort By:</p>
            <Accordion title={sortTitle} absolute={true}>
              <div className={styles.sortItems}>
                <button onClick={(e) => handleSort(e, "priceUp")}>
                  Price Up
                </button>
                <button onClick={(e) => handleSort(e, "priceDown")}>
                  Price Down
                </button>
                <button onClick={(e) => handleSort(e, "discount")}>
                  Discount
                </button>
                <button onClick={(e) => handleSort(e, "rating")}>Rating</button>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
      <div className={styles.main} style={{ gap: isFilters ? 25 : 0 }}>
        <aside>
          <Filters isOpen={isFilters} handleClick={setIsFilters} />
        </aside>
        <div className={styles.catalogContainer}>
          <Catalog products={data.items} />
          <Pagination
            page={page}
            total={data.total}
            limit={data.limit}
            onPageChange={setPage}
          />
        </div>
      </div>
    </section>
  );
};

export default CatalogPage;
