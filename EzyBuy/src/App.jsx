import Landing from "./landing/Landing";
 import Login from "./Login/Login";
import Reg from "./registration/Reg";
import Home from "./home/Home";
import Contactus from "./assets/Contact/Contactus";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App(){

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element: <Reg/>
    },
    {
      path: "/home",
      element: <Home/>
      },
     {
      path: "/Contact",
      element: <Contactus/>
     } 
  ])
return(
  <>
  <RouterProvider router={router} />
  </>
)
}

export default App  
