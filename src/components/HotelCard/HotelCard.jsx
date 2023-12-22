import "./HotelCard.css"
export const HotelCard=({hotel})=>{
  
  
  
    if(hotel){
  
      const {_id,image,name,address,city,state,price,rating}=hotel
    return (
      <div className="relative hotelcard-container shadow  cursor-pointer">
        <div>
          <img className="img" src={image} alt={name} />
          <div className="hotelcard-deatails">
            <div className="d-flex align-center">
              <span className="location">{city},{state}</span>
              <span className="rating d-flex align-center"></span>
              <span class="material-icons-outlined">star</span>
              <span>{rating}</span>
            </div>
            <p className="hotel-name">{name}</p>
            <p className="price-details">
              <span className="price">Rs.{price}</span>
              <span>Night</span>
            </p>
          </div>
        </div>
          <button className="button btn-wishlist absolute d-flex align-center">
            <span class="material-icons favorite cursor">favorite</span>
          </button>
        
      </div>
    );}  
}