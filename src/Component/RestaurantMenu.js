// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { menu_api } from "../Util/Constants";
import useRestaurantmenu from "../Util/useRestaurantmenu";
// import "./RestaurantMenu.css";
import RestaurantCategory from "./ResCategory.js";
import { useState } from "react";



const RestaurantMenu = () =>{  

//  const[resInfo,setresInfo] = useState(null);

const [ showindex , setshowindex] = useState()

 const {resid}=useParams();

 console.log(resid)

 const resInfo = useRestaurantmenu(resid);
 


    // useEffect(()=>{
    //     fetchMenu();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // },[]);

    // const fetchMenu = async()=>{
    //     const data = await fetch (menu_api + resid);
    //     const json = await data.json(data)
    //     console.log(json);
    //     console.log(json);
    //     setresInfo(json.data)
    // };
 
    console.log(resInfo)

    if(resInfo === null)return <Shimmer/>

    const{name,cuisines,costForTwoMessage}=resInfo.cards[2].card.card.info;

    //  

    // console.log(itemCards);

    
    const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.["card"]?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" 

    );
    console.log(categories);


    return (
      <div className="mt-24">
      <div className="h-48 w-full bg-orange-500 p-6 rounded-lg shadow-md text-center mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-black-800 mb-2">{name}</h1>
        <p className="text-black-600 text-l font-semibold">
          {cuisines.join(', ')} - <span className="font-semibold">{costForTwoMessage}</span>
        </p>
      </div >
         {/* categories accordions */}
      
      {categories.map((category ,index) => (
                <RestaurantCategory 
                key ={category?.card?.card?.title} 
                data = {category?.card?.card} 
                showitems = {index === showindex ? true : false}
                setshowindex = {() => setshowindex(index)}
                />
                
            ))}
    
        
    </div>
        
    ) ;
};


export default RestaurantMenu;
    