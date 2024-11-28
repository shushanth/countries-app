import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route } from "react-router";

const CountriesApp = lazy(() => import("countries/Countries"));
const CountriesDetailsApp = lazy(
  () => import("countriesDetails/CountriesDetails")
);

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ErrorBoundary fallback="something went wrong">
            <Suspense fallback="loading...">
              <CountriesApp />
            </Suspense>
          </ErrorBoundary>
        }
      />

      <Route
        path="/details"
        element={
          <ErrorBoundary fallback="something went wrong">
            <Suspense fallback="loading...">
              <CountriesDetailsApp />
            </Suspense>
          </ErrorBoundary>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
