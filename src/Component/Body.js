import RestaurantCard from './restCard';
import './Body.css';
// import { useState } from 'react';
import resList from '../Util/Mock_data';


const Body= () => {

// const[ listofRestaurants , setListofRestraunt] = useState([resList]);

return (
      <div className="body">
        <div className="search">search</div>
        <div className="filter">
          <button 
               className="filter-btn" 
               onClick={()=>{
               
            //  const f_list = listofRestaurants.filter(
            //   (res) => res.info.avgRatingString > 4
              
            //  );
            //  setListofRestraunt(f_list);
             
          }}
          
          >
            Top rated restaurant
          </button>
        </div>
        <div className="res_container">
         
          {
           resList.map((restaurants) => <RestaurantCard key={restaurants.info.id} resData={restaurants}/>)
          }
        </div>
      </div>
    );
  }

  export default Body;