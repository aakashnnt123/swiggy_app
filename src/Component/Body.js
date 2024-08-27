import RestaurantCard from "./RestCard";
import "./Body.css";
import { useState, useEffect } from "react";
// import resList from '../Util/Mock_data';
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const[filterrestaurant, setfilterrestaurant] = useState([])
  const[searchtext , setsearchtext] = useState("");
   
  // if no depenndency array => use Effect is called on every render
  // if dependency array is empty = [] => useEffect is called on initial render(just once)
  // if dependency array is not-empty = [...] => useEffect is called only when dependency changes.
   
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();
    console.log(json);

    setlistofRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterrestaurant(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
    
  };

 return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
        <div className="search">
          <input type="text" className="search-box" value={searchtext} onChange={(e) =>{
                     setsearchtext(e.target.value);
          }}

          ></input>
          
          <button
              onClick={()=>{
                    //  console.log(searchtext)
                     const filteredreslist=listofRestaurants.filter(
                      (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                     );

                     setfilterrestaurant(filteredreslist);
              }}
          >
           search</button>
        </div>
        <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const fil_list = listofRestaurants.filter(
              (res) => res.info.avgRatingString > 4.5
            );

            setfilterrestaurant(fil_list);
          }}
        >
          Top rated restaurant
        </button>
      </div>
      <div className="res_container">
        {filterrestaurant.map((restaurants) => (
          <Link 
          key = {restaurants.info.id}
          to={"/restautants/"+restaurants.info.id}
          >
            <RestaurantCard resData ={restaurants} />

          </Link>
       
        ))}
      </div>
    </div>
  );
};

export default Body;