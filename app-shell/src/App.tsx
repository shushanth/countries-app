import { BrowserRouter } from "react-router";
import "./App.css";
import AppRoutes from "./Router/Routes";

const App = () => {
  return (
    <div className="content">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
