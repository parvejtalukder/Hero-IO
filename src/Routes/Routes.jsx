import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <p>Error</p>,
    children: [
      {
        index: true, 
        path: "/",
        // loader: () => fetch('dataBase.json'),
        Component: Home,
      }
    ]
  },
]);