import { BrowserRouter } from "react-router";
import "./App.scss";
import AppRoutes from "./Router/Routes";
import AppLayout from "./components/appLayout/AppLayout";
import { lazy } from "react";

const PageNavLayout = lazy(() =>
  import("uiComponents/Components").then((m) => ({
    default: m.PageNavLayout,
    ...m,
  }))
);

const App = (): JSX.Element => {
  return (
    <div className="content">
      <AppLayout>
        <>
          <PageNavLayout>nav</PageNavLayout>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </>
      </AppLayout>
    </div>
  );
};

export default App;
