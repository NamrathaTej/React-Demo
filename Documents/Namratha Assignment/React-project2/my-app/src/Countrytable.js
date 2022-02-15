import React from "react";
import Table from "react-bootstrap/Table";

export default function Countrytable({countries}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Population</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country) => (
          <tr>
            <td>Flag</td>
            <td>{country.name.commom}</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
