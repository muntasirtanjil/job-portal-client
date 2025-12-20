import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/SignIn/Login";
import JobDetails from "../pages/jobDetail/JobDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/jobs/:id',
                Component: JobDetails,
                loader: ({params}) => fetch(`http://localhost:3000/job/${params.id}`)
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            }
        ]

    },
]);
export default router;