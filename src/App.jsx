import React from 'react';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Contact from './Components/Contact/contact';
import Country from './Components/Country/country';
import Layout from './Components/Layout/Layout';
import Error from './Components/Error/Error';
import CountryDetails from "./Components/CountryDetails/CountryDetails";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/country',
        element: <Country />,
      },
     
      {
        path: 'country/:id',
        element: <CountryDetails />,
      },
     




    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;