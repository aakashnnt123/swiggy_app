import RestaurantCard from "./RestCard";
// import "./Body.css";
import { useState, useEffect } from "react";
// import resList from '../Util/Mock_data';
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Util/useOnlineStatus";

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
         "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.67400&lng=76.72490&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
  
    const json = await data.json();
    // console.log(json);

    setlistofRestaurants(
      json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterrestaurant(json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
    
  };
  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 mt-24">
        <h1 className="text-3xl text-black font-bold  px-4 text-center">
          Looks like you're offline!! Please check your internet Connection;
        </h1>
        <Shimmer/>
      </div>
    );
  }
  
     

 return listofRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
    <div className="body">

    {/* Search Bar */}
    <div className="search flex items-center bg-white shadow-lg rounded-lg py-2 px-4 max-w-md mx-auto my-4 mt-24">
  <input
    type="text"
    className="search-box w-full pl-4 pr-10 text-lg text-gray-700"
    value={searchtext}
    onChange={(e) => {
      setsearchtext(e.target.value);
    }}
  />
  <button
    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md"
    onClick={() => {
      const filteredreslist = listofRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(searchtext.toLowerCase())
      );
      setfilterrestaurant(filteredreslist);
    }}
  >
    Search
  </button>
</div>

{/* FILTER BUTTON */}
    <div className="filter flex justify-center">
  <button
    className="filter-btn bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
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
      
      {/* Restaurant-Card */}

      <div className="flex flex-wrap">
  {filterrestaurant.map((restaurants) => (
    <Link 
      key={restaurants.info.id}
      to={"/restautants/"+restaurants.info.id}
      className=""
    >
      <RestaurantCard 
        resData={restaurants} 
      />
    </Link>
  ))}
</div>



    </div>
  );
};

export default Body;