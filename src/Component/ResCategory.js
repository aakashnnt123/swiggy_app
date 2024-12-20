// import "./ResCategory.css";
import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data}) =>{
    

    const[showitems , Setshowitems] = useState(false);

    const handleClick=()=>{
      Setshowitems(!showitems)
    }
    
    return <div>
       
        {/* Header */}
<div className=" bg-gray-200 mb-3 mt-5 p-4 ml-[250px] mr-[250px] rounded-lg shadow-m cursor-pointer " onClick= {handleClick}>
  <div className="flex justify-between items-center  " >
    <span className="font-bold text-lg text-gray-800">{data.title} ({data.itemCards.length})</span>
    <span className="arrow transition-transform duration-300">▼</span>
  </div>
  <div className="mt-4">
    { showitems && <ItemList items={data.itemCards}/>}
      
  </div>
</div>
</div>
}

export default RestaurantCategory;