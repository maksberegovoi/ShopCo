import React, { useState } from "react";
import styles from "./Catalog.module.scss";
import ProductCard from "../ProductCard/ProductCard.jsx";
import { useGetAllProductsQuery } from "../../redux/features/products/productsAPI.js";
import Loader from "../../UI/Loader/Loader.jsx";
import Error from "../Error/Error.jsx";
import Pagination from "../../UI/Pagination/Pagination.jsx";

const Catalog = () => {
  const [page, setPage] = useState(1);
  const limit = 9;
  const { data, isLoading, isError } = useGetAllProductsQuery({
    page,
    limit,
  });

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>FilterName</h3>
        <div>
          <p>
            Showing {data.limit} of {data.total} Products
          </p>
        </div>
      </div>
      <ul className={styles.list}>
        {data.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
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
