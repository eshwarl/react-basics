import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            console.log("Fetching data...");
    
            const response = await fetch(
                "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=17.36904306509824&lng=78.43573855705249&carousel=true&third_party_vendor=1"
            );
    
            if (!response.ok) {
                throw new Error(`HTTP Error! Status: ${response.status}`);
            }
    
            const json = await response.json();
            console.log("API Response:", json);
    
            const restaurantData = json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
            if (!restaurantData) {
                throw new Error("Restaurant data is missing in API response");
            }
    
            console.log("Extracted Restaurants:", restaurantData);
            setListOfRestaurants(restaurantData);
            setFilteredList(restaurantData); // ✅ Update filtered list
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    if (listOfRestaurants.length === 0) {
        console.log("No restaurants found, showing Shimmer...");
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input 
                        type="text" 
                        className="search-box" 
                        value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} 
                    />
                    <button
                        onClick={() => {
                            console.log(searchText);
                            const filtered = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredList(filtered); // ✅ Update filtered list
                        }}
                    >
                        Search
                    </button>
                </div>

                <button
                    className="filter-btn"
                    onClick={() => {
                        const topRated = listOfRestaurants.filter((res) => res?.info?.avgRating > 4.4);
                        setFilteredList(topRated); // ✅ Update filtered list instead of original state
                    }}
                >
                    Top Rated
                </button>
            </div>

            <div className="res-Container">
                {filteredList.map((restaurant) => (
                  <Link 
                  key={restaurant.info.id}
                  to={"/restaurants/"+restaurant.info.id}> <RestaurantCard resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
