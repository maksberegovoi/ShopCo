import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";

const Breadcrumb = () => {
  const location = useLocation();

  // Разделяем путь на сегменты, пропуская пустые строки
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Если на главной странице — не рендерим
  if (pathnames.length === 0) return null;

  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={routeTo}> › {decodeURIComponent(name)}</span>
        ) : (
          <span key={routeTo}>
            {" › "}
            <Link to={routeTo}>{decodeURIComponent(name)}</Link>
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
