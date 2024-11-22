import { BrowserRouter } from "react-router-dom";
import PageRoutes from "../routes";

const Pages = (): JSX.Element => {
  return (
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  );
};

export default Pages;