import { useState, useEffect } from "react";
import countrytable from "../Countrytable";

function Home() {
  const [country, setCountry] = useState([]);
  console.log(country);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountry(data));
  }, []);

  return (<countrytable country={country} />);
}
export default Home;
