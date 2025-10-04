import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import sprite from "../../../assets/icons/sprite.svg";

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x)
    .filter((name) => isNaN(Number(name)));

  if (pathnames.length === 0) return null;

  return (
    <nav className={`${styles.breadcrumbs} container`} aria-label="breadcrumb">
      <Link to="/" className={styles.link}>
        Home
        <svg className={styles.icon}>
          <use href={`${sprite}#icon-arrow`}></use>
        </svg>
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return (
          <span key={routeTo} className={styles.item}>
            {isLast ? (
              <span className={styles.current}>{decodeURIComponent(name)}</span>
            ) : (
              <Link to={routeTo} className={styles.link}>
                {decodeURIComponent(name)}
                <svg className={styles.icon}>
                  <use href={`${sprite}#icon-arrow`}></use>
                </svg>
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
