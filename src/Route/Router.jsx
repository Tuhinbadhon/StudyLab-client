import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes2 from "../Pages/PrivetRoutes/PrivetRoutes2";
import Appointment from "../Pages/Appointment/Appointment";
import PrivateRoutes from "../Pages/PrivetRoutes/PrivetRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: (
          <PrivateRoutes2>
            <Registration></Registration>
          </PrivateRoutes2>
        ),
      },
      {
        path: "/agent/:id",
        element: (
          <PrivateRoutes>
            <Appointment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/appointment/:id",
        element: (
          <PrivateRoutes>
            <Appointment />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
