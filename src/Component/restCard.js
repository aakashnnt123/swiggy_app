import { CDN_URL } from '../Util/Constants.js';
// import './RestCard.css' ; 


const RestaurantCard = (props)=>{
  
    const {resData}=props

   const{name,cuisines,costForTwo,avgRatingString} = resData?.info;
    return(
        <div className="p-4 m-6 w-[260px] h-[380px] bg-white rounded-xl shadow-lg hover:shadow-4xl  transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-105 flex flex-col">
        <img className="rounded-t-xl h-[160px] w-full object-cover " src={CDN_URL + resData.info.cloudinaryImageId} alt="restaurant-food-img" />
        
        <div className="flex flex-col flex-grow justify-between p-4">
          <h1 className='font-bold text-xl text-gray-800 truncate'>{name}</h1>
          <div className="flex items-center justify-start mt-1">
            <span className='bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md mr-2'>{avgRatingString} ⭐</span>
            <span className="text-xs text-gray-600  font-bold px-2 py-1 rounded-md">•{resData.info.sla.deliveryTime}min🚚</span>
          </div>
          <h4 className='text-m text-gray-700 mt-0 '>{cuisines.join(", ")}</h4> 
          <h4 className='text-sm text-gray-600 mt-1'>Cost for two: {costForTwo}</h4> 
          
       
        </div>
      </div>
      
      
      
    )
}

export default RestaurantCard;
