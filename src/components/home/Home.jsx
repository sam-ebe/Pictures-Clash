import React from "react";
import Header from "./../header/Header";
import SearchBar from "./../searchbar/SearchBar";
import CardList from "./../cardList/CardList";
import "./index.css";

function Home({ started, handleStart }) {
  return (
    <div className="home">
      <Header />
      <SearchBar started={started} handleStart={handleStart} />
      <CardList />
    </div>
  );
}

export default Home;
