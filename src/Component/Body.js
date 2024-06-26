import RestaurantCard from './RestCard';
import './Body.css';
import { useState,useEffect } from 'react';
// import resList from '../Util/Mock_data'; 
import Shimmer from "./Shimmer";


const Body= () => {

const [ listofRestaurants , filter_list] = useState([]);

useEffect( () => {
 fetchData();
} , []);

const fetchData = async() =>{
  const data = await fetch(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );
  // const data = await fetch(
  //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
  // );
 const json = await data.json();
 console.log(json)

 filter_list(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
// filter_list(json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}; 

// if(listofRestaurants.length === 0){
//   return <Shimmer />;
// }

return listofRestaurants.length === 0 ?(
  <Shimmer />
):(
      <div className="body">  
        <div className="search">search</div>
        <div className="filter">
          <button 
               className="filter-btn"   
               onClick={ ()=> {
              
             const fil_list = listofRestaurants.filter(
              (res) => res.info.avgRatingString > 4.2);

              filter_list(fil_list);
             }}>
            Top rated restaurant
          </button>
        </div>
        <div className="res_container">
         
          {
           listofRestaurants.map((restaurants) => <RestaurantCard key={restaurants.info.id} resData={restaurants}/>)
          }
        </div>
      </div>
    );
  }

  export default Body;