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
import GiveMark from "../components/PendingAssignment/GiveMark";
import AdminRoute from "../Pages/PrivetRoutes/AdminRoute";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";

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
        loader: () => fetch("https://studylab-ass11.vercel.app/items"),
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
          fetch(`https://studylab-ass11.vercel.app/items/${params.id}`),
      },
      {
        path: "/updateitems/:id",
        element: (
          <PrivateRoutes>
            <UpdateItems />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://studylab-ass11.vercel.app/items/${params.id}`),
      },
      {
        path: "/givemark/:id",
        element: (
          <PrivateRoutes>
            <GiveMark />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://studylab-ass11.vercel.app/attemptedItems/${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin only routes
      // {
      //   path: "addItems",
      //   element: (
      //     <AdminRoute>
      //       <AddItems></AddItems>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "manageItems",
      //   element: (
      //     <AdminRoute>
      //       <ManageItems></ManageItems>
      //     </AdminRoute>
      //   ),
      // },
      // {
      //   path: "updateItem/:id",
      //   element: (
      //     <AdminRoute>
      //       <UpdateItem></UpdateItem>
      //     </AdminRoute>
      //   ),
      //   loader: ({ params }) =>
      //     fetch(`http://localhost:5000/menu/${params.id}`),
      // },
      // {
      //   path: "users",
      //   element: (
      //     <AdminRoute>
      //       <AllUsers></AllUsers>
      //     </AdminRoute>
      //   ),
      // },
    ],
  },
]);

export default router;
