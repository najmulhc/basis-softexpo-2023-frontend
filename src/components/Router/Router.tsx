import { createBrowserRouter } from "react-router-dom";
import AddCompany from "../AddCompany/AddCompany";
import AddDeveloper from "../AddDeveloper/AddDeveloper";
import Home from "../Home/Home";
import HomeContainer from "../Home/HomeContainer";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomeContainer />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-company",
        element: <AddCompany />,
      },
      {
        path: "/add-developer",
        element: <AddDeveloper />,
      },
    ],
  },
]);

export default AppRouter;
