import { IMG_URL } from "../Util/Constants";

const ItemList = ({items}) =>{
    return <div>
        
            {items.map((item) => (
                <div
                key={item.card.info.id}
                className="p-2 m-4  border-gray-600 border-b-2"
              >
                <div className="flex justify-between ">
                  <div className="w-3/4">
                    <span className="font-extrabold text-lg">{item.card.info.name}</span>
                    <div className="text-md">
                      -₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
                    </div>
                    <p className="text-sm">{item.card.info.description}</p>
                  </div>
                  <div className="h-36 w-1/4 flex items-end justify-center relative">
                    <img
                      className="h-36 w-40 object-contain "
                      src={IMG_URL + item.card.info.imageId}
                      alt="menu_pic"
                    />
                    <div className="absolute bottom-0  ">
                      <button className="p-2 rounded-lg bg-black shadow-lg bg-opacity-70 text-white">
                        <div className="px-6 text-gray-200 font-extrabold">ADD</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              
            ))}
                
    </div>
}

export default ItemList;