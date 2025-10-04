import React, { useEffect, useState } from "react";
import styles from "./Catalog.module.scss";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useGetAllProductsQuery } from "../../redux/features/products/productsAPI.js";
import Loader from "../../UI/Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import Pagination from "../../UI/Pagination/Pagination.jsx";
import { useDeviceType } from "../../hooks/useDeviceType.js";
import Accordion from "../Accordion/Accordion.jsx";
import sprite from "../../../assets/icons/sprite.svg";
import Filters from "../Filters/Filters.jsx";
import { useFilters } from "../../hooks/useFilters.js";

const Catalog = () => {
  const deviceType = useDeviceType();
  const [page, setPage] = useState(1);
  const limit = deviceType === "desktop" ? 9 : 6;
  const { filters, setSortBy } = useFilters();
  const { data, isLoading, isError } = useGetAllProductsQuery({
    page,
    limit,
    filters,
  });

  const [sortTitle, setSortTitle] = useState("Most Popular");
  const handleSort = (e, sortBy) => {
    setSortTitle(e.target.textContent);
    setSortBy(sortBy);
  };

  const [isFilters, setIsFilters] = useState(false);
  const toggleFilters = () => {
    setIsFilters(!isFilters);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    if (isFilters && deviceType !== "desktop") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilters, deviceType]);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>
          {filters.category
            ? filters.category
            : [filters.style, filters.type].filter(Boolean).join(" • ") ||
              "Catalog"}
        </h3>
        <div className={styles.headerContent}>
          <button
            className={styles.filters}
            onClick={toggleFilters}
            aria-label="toggle filters"
          >
            Filters
            <svg className={styles.iconFilters}>
              <use href={`${sprite}#icon-filters`}></use>
            </svg>
          </button>
          <p>
            Showing {data.limit} of {data.total} Products
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
      <Filters
        isOpen={isFilters}
        handleClick={setIsFilters}
        deviceType={deviceType}
      />
      {data.items.length > 0 ? (
        <ul className={styles.list}>
          {data.items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      ) : (
        <h3 style={{ textAlign: "center" }}>No products found</h3>
      )}
      <Pagination
        page={page}
        total={data.total}
        limit={data.limit}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Catalog;
