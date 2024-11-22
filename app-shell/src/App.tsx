import { BrowserRouter } from "react-router";
import "./App.scss";
import AppRoutes from "./Router/Routes";
import AppLayout from "./components/appLayout/AppLayout";

const App = (): JSX.Element => {
  return (
    <div className="content">
      <AppLayout>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppLayout>
    </div>
  );
};

export default App;
