import RestaurantCard from './restCard';
import './Body.css';
import { useState } from 'react';
import resList from '../Util/Mock_data'; 


const Body= () => {

const [ listofRestaurants , filter_list] = useState(resList);

return (
      <div className="body">
        <div className="search">search</div>
        <div className="filter">
          <button 
               className="filter-btn"   
               onClick={ ()=> {
               console.log("button click")    
             const fil_list = listofRestaurants.filter(
              (res) => res.info.avgRatingString > 4);

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