import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {  } from '@tanstack/bling'
import { routes } from './root'

let router = createBrowserRouter(routes)

ReactDOM.hydrateRoot(document, <RouterProvider router={router} />);
