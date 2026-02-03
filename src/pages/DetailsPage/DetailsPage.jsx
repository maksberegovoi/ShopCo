import React, { Suspense } from "react";
import ProductDetails from "../../components/ProductDetails/ProductDetails.jsx";
import { generatePath, NavLink, Outlet, useParams } from "react-router-dom";
import Loader from "../../UI/Loader/Loader.jsx";
import styles from "./DetailsPage.module.scss";
import { FAQ_ROUTE, REVIEWS_ROUTE } from "../../utils/consts.js";
import { useGetProductByIdQuery } from "../../api/products/productsAPI.js";
import Error from "../../components/Error/Error.jsx";

const DetailsPage = () => {
  const { id } = useParams();
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);

  if (isLoading) return <Loader />;
  if (isError) return <Error />;

  return (
    <>
      <section className={"container"}>
        <ProductDetails product={product} isLoading={isLoading} />
        <div className={styles.togglerContainer}>
          <NavLink
            to=""
            end
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Details
          </NavLink>
          <NavLink
            to={generatePath(REVIEWS_ROUTE)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            Rating & Reviews
          </NavLink>
          <NavLink
            to={generatePath(FAQ_ROUTE)}
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            FAQs
          </NavLink>
        </div>
      </section>
      <section className={`${styles.outlet} container`}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </section>
    </>
  );
};

export default DetailsPage;
