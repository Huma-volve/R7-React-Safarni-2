import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout /> ,
        // errorElement: <Error />,
        children: [
        { path: '/', element: <Home /> },

        ],
    },


]
);

export default router;