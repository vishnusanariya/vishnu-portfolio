import React from 'react'
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Education from "./Pages/Home/Components/Education/Education";
import Layout from "./components/Layout/Layout";
import About from "./Pages/Home/Components/About/About";
import Skills from "./Pages/Home/Components/Skills/Skills";
import Projects from "./Pages/Home/Components/Projects/Projects";
import Contact from "./Pages/Home/Components/Contact/Contact";
import Experience from "./Pages/Home/Components/Experience/Experience";
import Achievments from "./Pages/Home/Components/Achievments/Achievments";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/achievements",
        element: <Achievments />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
    ],
  },
]);
const App:React.FC = () => {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
