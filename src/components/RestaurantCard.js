import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    
    const{resData}=props;
                    
    const {name,locality,areaName,costForTwo,cuisines,avgRating,deliveryTime}=resData?.info;
    


  return(
    <div className="res-card" style={{
        backgroundColor:"#f0f0f0",
    
    }} >
        <img className="res-logo" alt="img-logo" src={CDN_URL
            +resData.info.cloudinaryImageId}/>
      <h3>{name}</h3>
     
      <h4>{locality}</h4>
      <h4>{areaName}</h4>
      <h4>{costForTwo}</h4>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime}</h4>
     
    
     
    </div>
   
  );
};

export default RestaurantCard;