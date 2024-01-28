import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  const Home = lazy(() => import("./pages/Home/Home"));
  const NoMatchRoute = lazy(() => import("./pages/Errors/NoMatchRoute"));
  const Templates = lazy(() => import("./pages/Templates/Templates"));
  const Library = lazy(() => import("./pages/Library/Library"));

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="templates"
        element={
          <Suspense>
            <Templates />
          </Suspense>
        }
      />
      <Route
        path="library"
        element={
          <Suspense>
            <Library />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense>
            <NoMatchRoute />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default Router;
