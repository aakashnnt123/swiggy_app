import { IMG_URL } from "../Util/Constants";

const ItemList = ({items}) =>{
  console.log(items)
    return <div>
        
            {items.map((item) => (
                <div key ={item.card.info.id} className="p-2 m-2 border border-gray-400 border-b-2">
                   <div className="flex justify-between">
                    <div className="w-3/4"> 
                    <span className="font-extrabold">{item.card.info.name}</span>
                    <div>-₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</div>
                    <p>{item.card.info.description}</p>
                   </div>
                    <div className="h-full w-1/4 flex items-end justify-center">
                        <img className=""  src ={IMG_URL + item.card.info.imageId} alt="menu_pic" />
                        <div className="absolute">
                        <button className="p-2 mx -16 rounded-lg  bg-white shadow-lg">
                          <div className="ml-5 mr-5 text-orange-600 font-extrabold">ADD+</div>
                        </button>
                      </div>
                    </div>
                 </div>
                  </div>
            ))}
                
    </div>
}

export default ItemList;