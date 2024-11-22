import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router";
import Countries from "../pages/countries/Countries";
import CountriesDetails from "../pages/countries-details/Countries-details";

const PageRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary fallback="please try again later">
            <Countries />
          </ErrorBoundary>
        }
      />
      <Route
        path="/details/:id"
        element={
          <ErrorBoundary fallback="please try again later">
            <Suspense fallback="loading...">
              <CountriesDetails />
            </Suspense>
          </ErrorBoundary>
        }
      ></Route>
    </Routes>
  );
};

export default PageRoutes;
