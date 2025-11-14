import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Error from './pages/error/Error';
import { lazy } from 'react';
const Layout = lazy(() => import("./Layout/Layout"));

const router = createBrowserRouter([
    {
        path: '/',
        element: < Layout />,
        errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },

        ],
    },


]
);

export default router;