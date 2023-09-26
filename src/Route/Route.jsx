import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                // loader: ()=> fetch("donation.json")
            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/singledonation/:id',
                element: <DonationDetails></DonationDetails>,
                // loader: ()=> fetch("donation.json")
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            
        ]
    }
])


export default myRoute;