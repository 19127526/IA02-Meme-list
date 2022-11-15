import { Route, Routes } from "react-router-dom";
import React from "react";
import Loading from "../components/loading/LoadingComponent";

const HomePageLazy = React.lazy(() => import("../pages/home/HomePage"));
const ClickPageLazy = React.lazy(() => import("../pages/click/ClickPage"));
const FormPageLazy = React.lazy(() => import("../pages/form/FormPage"));

function RoutesPage() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <React.Suspense fallback={<Loading />}>
            {" "}
            <HomePageLazy />{" "}
          </React.Suspense>
        }
      />
      <Route
        path="/"
        element={
          <React.Suspense fallback={<Loading />}>
            {" "}
            <HomePageLazy />{" "}
          </React.Suspense>
        }
      />
      <Route
        path="/click"
        element={
          <React.Suspense fallback={<Loading />}>
            {" "}
            <ClickPageLazy />{" "}
          </React.Suspense>
        }
      />
      <Route
        path="/form"
        element={
          <React.Suspense fallback={<Loading />}>
            {" "}
            <FormPageLazy />{" "}
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default RoutesPage;
