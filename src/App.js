import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './Components/About/About.jsx';
import Portfolio from './Components/Portfolio/Portfolio.jsx';
import Contact from './Components/Contact/Contact.jsx'
import Home from "./Components/Home/Home.jsx";
import Layout from './Components/Layout/Layout.jsx';
import Notfound from './Components/Notfound/Notfound.jsx'

let routers = createBrowserRouter([
  {path :'', element: <Layout/> , children:[
    
      {index: true, element: <Home/>},
      {path : 'about', element: <About/>},
      {path : 'portfolio', element: <Portfolio/>},
      {path : 'contact', element: <Contact/>},
      {path : '*', element: <Notfound/>},
    
  ]}
])

function App() {
  return <>
  <RouterProvider router ={routers}></RouterProvider>

  </>
}

export default App;
