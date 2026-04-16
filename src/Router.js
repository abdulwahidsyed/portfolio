import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routePaths } from "./constants/paths.constants";

const Router = () => {
  const Edit = lazy(() => import("./pages/Edit/Edit"));
  const Preview = lazy(() => import("./pages/Preview/Preview"));
  const NoMatchRoute = lazy(() => import("./pages/Errors/NoMatchRoute"));
  const Templates = lazy(() => import("./pages/Templates/Templates"));
  const Library = lazy(() => import("./pages/Library/Library"));

  return (
    <Routes>
      <Route
        path={routePaths.home}
        element={
          <Suspense>
            <Edit />
          </Suspense>
        }
      />
      <Route
        path={routePaths.preview}
        element={
          <Suspense>
            <Preview />
          </Suspense>
        }
      />
      <Route
        path={routePaths.templates}
        element={
          <Suspense>
            <Templates />
          </Suspense>
        }
      />
      <Route
        path={routePaths.library}
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
