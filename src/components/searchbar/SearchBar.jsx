import React, { useState } from "react";
import "./index.css";
function SearchBar({ started, handleStart }) {
  const handleClick = () => {
    handleStart(!started);
    console.log("searchbar");
  };
  return (
    <section className="search">
      <input
        className="search__input"
        type="search"
        name=""
        id=""
        placeholder="your theme"
      />
      <button className="search__button" onClick={handleClick}>
        Start
      </button>
    </section>
  );
}

export default SearchBar;
