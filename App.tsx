import React from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import { Naive } from "./Naive";
import { MobxOptimal } from "./MobxOptimal";

const Wrapper = () => {
  return (
    <div>
      <div>
        <Link to="/naive">Naive</Link>
      </div>

      <div>
        <Link to="/mobx-optimal">MobX Optimal</Link>
      </div>

      <div>
        Open the Javascript console to see how many cells per second each
        implementation can do!
      </div>

      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      { path: "/", element: <Navigate to="/mobx-optimal" /> },
      {
        path: "/naive",
        element: <Naive />,
      },
      {
        path: "/mobx-optimal",
        element: <MobxOptimal />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
