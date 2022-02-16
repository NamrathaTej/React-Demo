import React from "react";
import { useState, useEffect } from "react";
import Countrytable from "../Countrytable";
import CountryDetails from "./Details/CountryDetails";
import Search from "./Search";

function Home() {
  const [countries, setCountries] = useState([]);
  const[filteredData, setFilteredData] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
          setCountries(data)
          setFilteredData(data)
      }
   );
 }, []);

  const handleChange = (event) => {
    setKeyword(event.target.value);

    let filteredData = countries.filter((country) => {
      return (
        country.name.common
        .toLowerCase()
        .search(keyword.toLocaleLowerCase()) !== -1
      );
    });
    setFilteredData(filteredData)
  };

  return (
    <div>
      <Search
        handleChange={handleChange}
        value={keyword}
        countries={countries}
      />
      <Countrytable countries={filteredData} />;
    </div>
  );
}
export default Home;
