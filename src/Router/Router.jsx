import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/Home/SignUp/SignUp";
import Login from "../Pages/Home/Login/Login";
import Dashbord from "../Pages/Dashboard/Dashbord";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import Doctors from "../Pages/Doctors/Doctors";
import DoctorDetails from "../Pages/Doctors/DoctorDetails";
import { getDoctor } from "../auth/doctor";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Components/DashboardHome/DashboardHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allDoctors",
        element: <Doctors></Doctors>,
      },
      {
        path: "doctor/:id",
        element: <DoctorDetails></DoctorDetails>,
        loader: ({ params }) => getDoctor(params.id),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashbord></Dashbord>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addItem",
        element: <AddItem></AddItem>,
      },
    ],
  },
  {
    path: "dashboardLayout",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "addItem",
        element: <AddItem></AddItem>,
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "signup",
    element: <SignUp></SignUp>,
  },
]);
export default router;
