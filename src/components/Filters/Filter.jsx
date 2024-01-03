import "./Filter.css";
import { useFilter } from "../../context";
import {
  PriceRange,
  RoomsAndBeds,
  PropertyType,
  Rating,
  FreeCancel,
} from "./index";
export const Filter = () => {
  const { filterDispatch } = useFilter();
  const handleFilterModalCloseClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };
  const handleClearFilterClick = () => {
    filterDispatch({
      type: "CLEAR_ALL",
    });
  };
  return (
    <div className="filter-modal">
      <div className="filter-page shadow">
        <div className="d-flex align-center justify-space-between">
          <span className="filter-label">Filter</span>
          <button
            className="button btn-close cursor-pointer d-flex align-center justify-center"
            onClick={handleFilterModalCloseClick}
          >
            <span className="material-icons-outlined">close</span>
          </button>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Rating />
        <FreeCancel />
        <div className="d-flex align-center justify-space-between">
          <button
            className="button cursor btn-link-primary"
            onClick={handleClearFilterClick}
          >
            Clear All
          </button>
          <button
            className="button cursor btn-primary btn-apply"
            onClick={handleFilterModalCloseClick}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
