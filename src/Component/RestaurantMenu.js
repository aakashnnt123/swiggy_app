import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menu_api } from "../Util/Constants";
const RestaurantMenu = () =>{  

 const[resInfo,setresInfo] = useState(null);

 const {resid}=useParams();
 console.log(resid)



    useEffect(()=>{
        fetchMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch (menu_api + resid);
        const json = await data.json(data)
        console.log(json);

        setresInfo(json.data)
    };
    if(resInfo === null)return <Shimmer/>

    const{name,cuisines,costForTwoMessage}=resInfo.cards[2].card.card.info;

    const  { itemCards }  = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);


    return (
        
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(',')} - {costForTwoMessage}</p>

    <h2>Menu</h2>
       <h3>Recommended</h3>
             
             <ul>
                {itemCards && itemCards.map(item =>(
                <div key = {item.card.info.id}>
                        {item.card.info.name }
                       RS- {item.card.info.price/100 }
                </div>))}

             </ul>
        </div>
        
    ) ;
};


export default RestaurantMenu;
    
    