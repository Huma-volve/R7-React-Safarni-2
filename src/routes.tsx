import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
const Layout = lazy(() => import("./Layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const Error = lazy(() => import("./pages/error/Error"));
const MapPage = lazy(() => import("./pages/map/MapPage"));

const router = createBrowserRouter([
    {
        path: '/',
        element: < Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/', element: <Home />

            },
            {
                path: 'map', element: <MapPage yourLatitude={30.033}
                    yourLongitude={31.233}
                    yourPois={[
                        {
                            lat: 30.04,
                            lng: 31.20,
                            name: "Test Hotel",
                            type: "hotel"
                        }
                    ]} />
            },

        ],
    },


]
);

export default router;