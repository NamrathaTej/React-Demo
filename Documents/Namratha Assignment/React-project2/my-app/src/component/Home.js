import React from "react";
import { useState, useEffect } from "react";
import Countrytable from "../Countrytable";
import CountryDetails from "./Details/CountryDetails";
import Search from "./Search";

function Home() {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  const handleChange = (event) => {
    setKeyword(event.target.value);

    let filteredData= countries.filter((country)=>{
        return country.name.common.toLowerCase().Search(keyword.toLowerCase())
    }
    )
  };

  return (
    <div>
        <Search handleChange={handleChange} value={keyword}/>
      <Countrytable countries={countries} />;
    </div>
  );
}
export default Home;
