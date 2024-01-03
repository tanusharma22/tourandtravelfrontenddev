import { useFilter } from "../../../context";
const numberOfAmenties=["Any","1","2","3","4","5"];
export const RoomsAndBeds = () => {
  const { filterDispatch, noOfBathrooms, noOfBedrooms, noOfBeds } = useFilter();
  const handleBedroomsClick = (number) => {
    filterDispatch({
      type: "BEDROOMS",
      payload: number,
    });
  };

  const handleBathroomsClick = (number) => {
    filterDispatch({
      type: "BATHROOMS",
      payload: number,
    });
  };

  const handleBedsClick = (number) => {
    filterDispatch({
      type: "BEDS",
      payload: number,
    });
  };
  return (
    <div className="filter-container">
      <span className="filter-label">Rooms And Beds</span>
      <div className="d-flex align-center gap-large">
        <div className="d-flex direction-column gap">
          <span className="span-label">Bedrooms</span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className="d-flex direction-column gap">
            <div>
                {
                    numberOfAmenties.map(number=><span key={number}
                    className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${
                      noOfBedrooms.toString() === number ? "selected" : ""
                    }`}
                    onClick={()=>handleBedroomsClick(number)}>{number}</span>)
                }
            </div>
            <div>
                {
                    numberOfAmenties.map(number=><span key={number}
                    onClick={()=>handleBedsClick(number)} className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${
                      noOfBeds.toString() === number ? "selected" : ""
                    }`}>{number}</span>)
                }
            </div>
            <div>
                {
                    numberOfAmenties.map(number=><span key={number}
                      onClick={()=>handleBathroomsClick(number)} className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${
                        noOfBathrooms.toString() === number ? "selected" : ""
                      }`}>{number}</span>)
                }
            </div>

        </div>
      </div>
    </div>
  );
};
