// import "./ResCategory.css";
import ItemList from "./ItemList";

const RestaurantCategory = (props) =>{
    const{data} = props;
    console.log(data);
    return <diV>
       
        {/* Header */}
<div className=" bg-gray-100 mb-3 mt-5 p-4 ml-[250px] mr-[250px] rounded-lg shadow-sm">
  <div className="flex justify-between items-center  cursor-pointer ">
    <span className="font-bold text-lg text-gray-800">{data.title} ({data.itemCards.length})</span>
    <span className="arrow transition-transform duration-300">⬇️</span>
  </div>
  <div className="mt-4">
    <ItemList items={data.itemCards}/>
  </div>
</div>
</diV>
}

export default RestaurantCategory;