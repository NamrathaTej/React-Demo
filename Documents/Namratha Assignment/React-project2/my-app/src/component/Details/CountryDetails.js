import React from "react";
import { useParams } from "react-router";


export default function CountryDetails() {
  const { name } = useParams();

  return <div>CountryDetails : {name}</div>;
}
