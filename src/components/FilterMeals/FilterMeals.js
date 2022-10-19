import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./FilterMeals.module.css";

const FilterMeals = ({ filterHandler }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      filterHandler(keyword);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  const inputChangeHandler = (e) => {
    setKeyword(e.target.value.trim());
  };

  return (
    <div className={classes.FilterMeals}>
      <div className={classes.InputOutter}>
        <input
          value={keyword}
          className={classes.SearchInput}
          type="text"
          placeholder="search"
          onChange={inputChangeHandler}
        />
        <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon} />
      </div>
    </div>
  );
};

export default FilterMeals;
