import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './Layout/Layout';
import Error from './pages/Error/Error';
import FlightBooking from './pages/FlightPages/FlightBooking/FlightBooking';
import FlightTickets from './pages/FlightPages/FlightTickets/FlightTickets';
import Seats from './pages/FlightPages/Seats/Seats';
import CarRental from './pages/CarPages/CarRental';
import CarRentalDetail from './pages/CarPages/CarRentalDetail';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout /> ,
        errorElement: <Error />,
        children: [
        { path: '/', element: <Home /> },
        { path: '/flightbooking', element: <FlightBooking/> },
        { path: '/flightttickets', element: <FlightTickets /> },
        { path: '/seats', element: <Seats /> },
        { path: '/carrental', element: <CarRental /> },
        { path: '/carrentaldetail', element: <CarRentalDetail /> }
        ],
    },


]
);

export default router;