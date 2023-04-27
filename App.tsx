import React, { createContext, useState, useRef, useEffect } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import { Naive } from "./Naive";
import { MobxOptimal } from "./MobxOptimal";
import { SIZE } from "./constants";

export const SizeContext = createContext(SIZE);

const Wrapper = () => {
  const [size, setSize] = useState(SIZE);
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = size;
    }
  }, []);

  return (
    <SizeContext.Provider value={size}>
      <div>
        <div>
          <Link to="/naive">Naive</Link>
        </div>

        <div>
          <Link to="/mobx-optimal">MobX Optimal</Link>
        </div>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              if (inputRef.current?.value) {
                setSize(parseInt(inputRef.current.value, 10));
              }
            }}
          >
            <label>
              Array size
              <input ref={inputRef} type="number" />
            </label>

            <button>Change</button>
          </form>
        </div>

        <div>
          Open the Javascript console to see how many cells per second each
          implementation can do!
        </div>

        <Outlet />
      </div>
    </SizeContext.Provider>
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
