import { createBrowserRouter } from "react-router-dom";
import { routerEnum } from "./routesEnum";
import ServiceDetails from "../components/ServiceDetails";
import Page from "../pages/Page";

export const createRouter = () => {
  return createBrowserRouter([
    { path: routerEnum.PAGE, element: <Page /> },
    {
      path: routerEnum.SERVICE_DETAILS,
      element: <ServiceDetails />,
    },
  ]);
};
