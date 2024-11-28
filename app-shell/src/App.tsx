import { BrowserRouter } from "react-router";
import "./App.scss";
import AppRoutes from "./Router/Routes";
import AppLayout from "./components/appLayout/AppLayout";
import { lazy } from "react";
import AppNavigation from "./components/appNavigation/AppNavigation";

const PageNavLayout = lazy(() =>
  import("uiComponents/Components").then((m) => ({
    default: m.PageNavLayout,
    ...m,
  }))
);

const App = (): JSX.Element => {
  return (
    <AppLayout>
      <>
        <BrowserRouter>
          <PageNavLayout>
            <AppNavigation />
          </PageNavLayout>
          <AppRoutes />
        </BrowserRouter>
      </>
    </AppLayout>
  );
};

export default App;
