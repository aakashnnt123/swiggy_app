import "./App.css";
import Header from './Component/Header.js';
import Body from './Component/Body.js';
import About from "./Component/About.js";
import Contact from "./Component/Contact.js";
import Error from "./Component/Error.js";
import{createBrowserRouter , Outlet} from "react-router-dom";




const Applayout = () =>{
  return(
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <Applayout/>,
    children:[
      { 
        path : "/",
        element:<Body/>,
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
    ],
    errorElement: <Error/>,

  },
  {
    path:"/about",
    element: <About/>,
  },
  {
    path:"/contact",
    element: <Contact/>,
  },
]);

export default appRouter;



