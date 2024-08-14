import { CDN_URL } from '../Util/Constants.js';
import './RestCard.css' ; 


const RestaurantCard = (props)=>{
  
    const {resData}=props

   const{name,cuisines,costForTwo,avgRatingString} = resData?.info;
    return(
        <div className="res-Card">
               <img className="food-img"src={CDN_URL + resData.info.cloudinaryImageId} alt="res-food-img"/>
               <div className='res-details' >
               <h2 className='name'>{name}</h2>
               <h4 className='cuisines'>{cuisines.join(", ")}</h4> 
               <h4 className='cost'>{costForTwo}</h4> 
               <h4 className='rating'>{avgRatingString}&#x2605;</h4>
               <h4 className='delivery'>{resData.info.sla.deliveryTime}min.</h4> 
               </div>
        </div>
    )
}

export default RestaurantCard;
