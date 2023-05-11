import React from "react";
import { useSelector } from "react-redux";

const NameList = () => {
  const names = useSelector((state) => state.names.names);

  return (
    <div>
      <h2>Names:</h2>
      {names.length === 0 ? (
        <p>No names found.</p>
      ) : (
        <ul>
          {names.map((name) => (
            <li key={name.id}>
              <strong>{name.name}</strong>
              <br />
              {name.address}
              <br />
              {name.city}, {name.state}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NameList;
