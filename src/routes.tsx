import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Error from './pages/Error/Error';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout /> ,
        errorElement: <Error />,
        children: [
        { path: '/', element: <Home /> },
        ],
    },


]
);

export default router;