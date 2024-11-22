import React from "react";
import "./App.css";

const CountriesApp = React.lazy(() => import("countries/Countries"));
const CountriesDetailsApp = React.lazy(
  () => import("countriesDetails/CountriesDetails")
);

const App = () => {
  return (
    <div className="content">
      I'm app shell
      <React.Suspense>
        <CountriesApp />
        <CountriesDetailsApp />
      </React.Suspense>
    </div>
  );
};

export default App;
