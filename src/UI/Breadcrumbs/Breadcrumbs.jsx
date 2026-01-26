import React from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbs } from "../../hooks/useBreadCrumbs/useBreadCrumbs.js";
import styles from "./Breadcrumbs.module.scss";
import sprite from "../../../assets/icons/sprite.svg";

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  if (breadcrumbs.length <= 1 && breadcrumbs[0]?.path === "/") {
    return null;
  }

  return (
    <nav className={`container`} aria-label="breadcrumb">
      <ol className={styles.breadcrumbs}>
        {breadcrumbs.map((crumb, index) => {
          const isLastPage = index === breadcrumbs.length - 1;

          return (
            <li key={crumb.url + index} className={styles.item}>
              {isLastPage ? (
                <span className={styles.current} aria-current="page">
                  {crumb.name}
                </span>
              ) : (
                <Link to={crumb.url} className={styles.link}>
                  {crumb.name}
                  <svg className={styles.icon}>
                    <use href={`${sprite}#icon-arrow`}></use>
                  </svg>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
