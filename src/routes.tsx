import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Error from './pages/Error/Error';
import Profile from './pages/Profile/Profile'
import ProfileInformation from './pages/Profile/ProfileInformation';
import Seacurity from './pages/Profile/Seacurity';
import MyBooking from './pages/Profile/MyBooking';
import GetStarted from './pages/Login/GetStarted';
import Login from './pages/Login/Login';
import Signup from './pages/Login/Signup';
import ForgetPassword from './pages/Login/ForgetPassword'
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            { path: "/", element: <Home /> },
            {
                path: "Profile",
                element: <Profile />,
            },
            {
                path: "inf",
                element: <ProfileInformation />,
            },
            {
                path: "security",
                element: <Seacurity />,
            },
            {
                path: "mybooking",
                element: <MyBooking />,
            },
            {
                path: "start",
                element: <GetStarted />,
            },
            {
                path: "login",
                element:<Login/>
            },
            {
                path: "signup",
                element: <Signup />,
            },
            {
                path: "forget",
                element: <ForgetPassword/>,
            },
        ],
    },
]);

export default router;