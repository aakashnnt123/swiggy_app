import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

 const[resInfo,setresInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7630356&lng=76.6528225&restaurantId=571149&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json(data)
        console.log(json);

        setresInfo(json.data)
    };

    // const{name,cuisines,costForTwoMessage}=resInfo.cards[2].card.card.info;
    
    return resInfo === null ? (
        <Shimmer/>
    ):(
        <div className="menu">
            <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
            <p>{resInfo?.cards[2]?.card?.card?.info.cuisines.join(',')} - {resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</p>

{/* <h1>{name}</h1>
<p>{cuisines.join(',')} - {costForTwoMessage}</p> */}
            
            <h2>Menu</h2>
             <ul>
                <li>PIZZA</li>
                <li>BURGER</li>
                <li>COFFEE</li>
             </ul>
        </div>
        
    ) ;
};


export default RestaurantMenu;
    
    