import React, { Suspense, useEffect, useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { publicRoutes } from "../routes/routes.js";
import Loader from "../UI/Loader/Loader.jsx";

const AppRouter = () => {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    const currentPath = location.pathname;
    const prevPath = previousPath.current;

    const getProductBasePath = (path) => {
      const segments = path.split("/").filter(Boolean);
      if (segments[0] === "catalog" && segments.length >= 3) {
        return `/${segments.slice(0, 3).join("/")}`;
      }
      return path;
    };

    const currentBasePath = getProductBasePath(currentPath);
    const prevBasePath = getProductBasePath(prevPath);
    const shouldScroll =
      currentBasePath !== prevBasePath || !currentPath.startsWith("/catalog/");

    if (shouldScroll) {
      window.scrollTo(0, 0);
    }

    previousPath.current = currentPath;
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {publicRoutes.map((route) => {
          const { path, Component, children } = route;

          return (
            <Route key={path} path={path} element={<Component />}>
              {children?.map((child) => {
                const {
                  path: childPath,
                  index,
                  Component: ChildComponent,
                } = child;

                return index ? (
                  <Route key="index" index element={<ChildComponent />} />
                ) : (
                  <Route
                    key={childPath}
                    path={childPath}
                    element={<ChildComponent />}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
