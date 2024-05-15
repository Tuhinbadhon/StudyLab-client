import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../components/Error/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoutes2 from "../Pages/PrivetRoutes/PrivetRoutes2";
import Appointment from "../Pages/Appointment/Appointment";
import PrivateRoutes from "../Pages/PrivetRoutes/PrivetRoutes";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/UpdateProfile/UpdateProfile";
import AssignmentForm from "../components/AssignmentForm/AssignmentForm";
import Assignment from "../components/Assignment/Assignment";
import PendingAssignment from "../components/PendingAssignment/PendingAssignment";
import MySubmitted from "../components/MySubmitted/MySubmitted";
import ViewItems from "../components/Assignment/ViewItems";
import UpdateItems from "../components/Assignment/UpdateItems";

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
        path: "/assignment",
        element: <Assignment />,
        loader: () => fetch("https://b9a11server-site.vercel.app/items"),
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
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/updateprofile",
        element: (
          <PrivateRoutes>
            <UpdateProfile />
          </PrivateRoutes>
        ),
      },
      {
        path: "/createassignment",
        element: (
          <PrivateRoutes>
            <AssignmentForm />
          </PrivateRoutes>
        ),
      },
      {
        path: "/pending",
        element: (
          <PrivateRoutes>
            <PendingAssignment />
          </PrivateRoutes>
        ),
      },
      {
        path: "/mysubmitted",
        element: (
          <PrivateRoutes>
            <MySubmitted />
          </PrivateRoutes>
        ),
      },
      {
        path: "/viewitems/:id",
        element: (
          <PrivateRoutes>
            <ViewItems />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://b9a11server-site.vercel.app/items/${params.id}`),
      },
      {
        path: "/updateitems/:id",
        element: (
          <PrivateRoutes>
            <UpdateItems />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://b9a11server-site.vercel.app/items/${params.id}`),
      },
    ],
  },
]);

export default router;
