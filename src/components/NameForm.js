import React, { useState } from "react";
import { useDispatch } from "react-redux";
//import { addName } from "../features/names/namesSlice";
import { addName } from "../features/names/dataSlice";

const NameForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name,
      address,
      city,
      state,
    };
    dispatch(addName(newPerson));
    setName("");
    setAddress("");
    setCity("");
    setState("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="state">State:</label>
        <input
          type="text"
          id="state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <button type="submit">Add Name</button>
    </form>
  );
};

export default NameForm;
