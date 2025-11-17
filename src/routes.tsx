import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('./pages/Home/Home'));
const SearchPage = lazy(() => import('./pages/search/SearchPage'));
const DestinationPage = lazy(() => import('./pages/destination/DestinationPage'));
const FilterPage = lazy(() => import('./pages/filter/FilterPage'));
const CheckOut = lazy(() => import('./pages/checkOut/CheckOut'));

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        // errorElement: <Error />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/search', element: <SearchPage /> },
            { path: '/destination', element: <DestinationPage /> },
            { path: '/filter', element: <FilterPage /> },
            { path: '/checkout', element: <CheckOut /> }
        ]
    }
]);

export default router;
