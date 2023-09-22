import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home";
import JobDetails from "./components/Home/FeaturedJobs/JobDetails/JobDetails";
import AppliedJobs from "./components/Home/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("../jobs.json"),
      },
      {
        path: "/appliedJobs",
        element: <AppliedJobs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
