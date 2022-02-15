import React from "react";
import { useState, useEffect } from "react";
import Countrytable from "../Countrytable";


function Home() {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return <Countrytable countries={countries} />;
}
export default Home;
