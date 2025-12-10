import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../Pages/Root/Root';
import Home from '../Pages/Home/Home';
import Apps from '../Pages/Apps/Apps';
import Error from '../Components/NoApp/Error';
import AppDetails from '../Components/AppDetails/AppDetails';
import Installation from '../Pages/Installation/Installation';
// import { RouterProvider } from "react-router/dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement: <Error></Error>,
    children: [
      {
        index: true, 
        path: "/",
        // loader: () => fetch('dataBase.json'),
        Component: Home,
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "/apps/:id",
        Component: AppDetails,
        loader: ({ params }) => {
          return fetch('/dataBase.json')
            .then(res => res.json())
            .then(data => data.find(app => parseInt(app.id) === parseInt(params.id)));
        }
      }, {
        path: "/installation",
        Component: Installation,
      }
    ]
  },
]);