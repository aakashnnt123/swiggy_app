import "./App.css";
import Header from './Component/Header.js';
import Body from './Component/Body.js';
import Contact from "./Component/Contact.js";
import Error from "./Component/Error.js";
import RestaurantMenu from "./Component/RestaurantMenu.js";
import{createBrowserRouter , Outlet} from "react-router-dom";
import { lazy , Suspense, useEffect, useState } from "react";
import UserContext from "./Util/UserContext.js";
import { Provider } from "react-redux";
import AppStore from "./Util/AppStore.js";
import Cart from "./Component/Cart.js";

//chunking
//Code Splitting
//Dynamic Bundling
//Lazy Loading...
//On demand loading..
//Dynamic import

const Grocery = lazy(()=>import("./Component/Grocery.js"));
const About = lazy(()=>import("./Component/About.js"))

const Applayout = () =>{

const [UserInfo ,SetUserInfo]=useState();

useEffect(()=>{
  const data ={
    name:"Aakash",
  }
  SetUserInfo(data.name);
},[])
  return(
    <Provider store ={AppStore}>
      <UserContext.Provider value={{loggedInUser : UserInfo}}>
      <div className=" bg-slate-100">
        <Header/>
        <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
    
    
  );
};

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
      {
        path:"/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error/>,
},
  

]);

export default appRouter;



