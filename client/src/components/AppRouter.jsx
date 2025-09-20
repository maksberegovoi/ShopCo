import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/routes.js";
import Loader from "../UI/Loader/Loader.jsx";


const AppRouter = () => {

  const isAuth = false

  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        {publicRoutes.map(({ path, Component, children }) => (
          <Route key={path} path={path} element={<Component />}>
            {children?.map(({ path: childPath, index, Component: ChildComponent }) =>
              index ? (
                <Route key="index" index element={<ChildComponent />} />
              ) : (
                <Route key={childPath} path={childPath} element={<ChildComponent />} />
              )
            )}
          </Route>
        ))}
        {isAuth && privateRoutes.map(({ path, Component, children }) => (
          <Route key={path} path={path} element={<Component />}>
            {children?.map(({ path: childPath, index, Component: ChildComponent }) =>
              index ? (
                <Route key="index" index element={<ChildComponent />} />
              ) : (
                <Route key={childPath} path={childPath} element={<ChildComponent />} />
              )
            )}
          </Route>
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;