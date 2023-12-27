import { useEffect, useState } from "react";
import { useCategory } from "../../context";
import axios from "axios";
import "./Categories.css";
export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [numberofCategoryToShow, setNumberOfCategoryToShow] = useState(0);
  const { hotelCategory, setHotelCategory } = useCategory();
  const handleRightButtonClick = () => {
    setNumberOfCategoryToShow((prev) => prev + 10);
  };
  const handleLeftButtonClick = () => {
    setNumberOfCategoryToShow((prev) => prev - 10);
  };
  const handleCategoryClick = (category) => {
    setHotelCategory(category);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://tourandtravel.cyclic.app/api/category"
        );
        const categoriesToShow = data.slice(
          numberofCategoryToShow + 10 > data.length
            ? data.length - 10
            : numberofCategoryToShow,
          numberofCategoryToShow > data.length
            ? data.length
            : numberofCategoryToShow + 10
        );
        setCategories(categoriesToShow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberofCategoryToShow]);
  return (
    <>
      <section className="categories d-flex align-center gap-large curson-point">
        {numberofCategoryToShow >= 10 && (
          <button
            className="button btn-category btn-left fixed cursor-pointer"
            onClick={handleLeftButtonClick}
          >
            <span class="material-icons-outlined">chevron_left</span>
          </button>
        )}
        {categories &&
          categories.map(({ _id, category }) => (
            <span
              className={`${category === hotelCategory ? "border-bottom" : ""}`}
              key={_id}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </span>
          ))}
        {numberofCategoryToShow - 10 < categories.length && (
          <button
            className="button btn-category btn-right fixed cursor-pointer"
            onClick={handleRightButtonClick}>
            <span class="material-icons-outlined">chevron_right</span>
          </button>
        )}
      </section>
    </>
  );
};
