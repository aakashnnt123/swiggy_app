import "./App.css";
import Header from './Component/Header.js';
import Body from './Component/Body.js';
// import About from "./Component/About.js";
import Contact from "./Component/Contact.js";
import Error from "./Component/Error.js";
import RestaurantMenu from "./Component/RestaurantMenu.js";
import{createBrowserRouter , Outlet} from "react-router-dom";
// import Grocery from "./Component/Grocery.js";
import { lazy , Suspense } from "react";

//chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading...
//On demand loading..
//Dynamic import

const Grocery = lazy(()=>import("./Component/Grocery.js"));
const About = lazy(()=>import("./Component/About.js"))

const Applayout = () =>{
  return(
    <div className=" bg-slate-100">
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
        element:(<Suspense fallback={<h1>Loading...</h1>}>
          <About/>
          </Suspense>),
      },
      {
        path:"/contact",
        element: <Contact/>,
      },
      {
      path:"/grocery",
      element:(<Suspense fallback={<h1>Loading...</h1>}>
      <Grocery/>
      </Suspense>),
      },
      {
        path:"/restautants/:resid",
        element: <RestaurantMenu/>,
      },
    ],
    errorElement: <Error/>,
},
  

]);

export default appRouter;



