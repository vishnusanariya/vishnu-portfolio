import "./App.css";
import { createBrowserRouter,RouterProvider, BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./Pages/Home/Components/Education/Education";
import Layout from "./components/Layout/Layout";
import About from "./Pages/Home/Components/About/About";
import Skills from "./Pages/Home/Components/Skills/Skills";
import Projects from "./Pages/Home/Components/Projects/Projects";
import Contact from "./Pages/Home/Components/Contact/Contact";
import Experience from "./Pages/Home/Components/Experience/Experience";
import Achievments from "./Pages/Home/Components/Achievments/Achievments";
const Router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<About/>,
      },
      {
        path:'/achievements',
        element:<Achievments/>,
      },
      {
        path:'/education',
        element:<Education/>,
      },
      {
        path:'/skills',
        element:<Skills/>,
      },
      {
        path:'/projects',
        element:<Projects/>,
      },
      {
        path:'/contact',
        element:<Contact/>,
      },
      {
        path:'/experience',
        element:<Experience/>,
      }
    ]
  }
])
const App=()=> {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route index element={<Layout />}>
            <Route index path="about" element={<About />} />
            <Route path="education" element={<Education />} />
            {/* <Route path="experiance" element={<About />} />
            <Route path="skills" element={<About />} />
            <Route path="projects" element={<About />} />
            <Route path="achievments" element={<About />} />
            <Route path="contact" element={<About />} /> 
          </Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={Router}/>
    </>
  );
}

export default App;
