import React, { useState } from "react";
import ReactDOM from "react-dom";

export const Form = () => {
  const [username, setUsername] = useState("");
  const [breed, setBreed] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    console.log(username);
    console.log(b);
    setUsername("");
    setBreed("");
  };

  return (
    <div id="container">
      <div id="navbar">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Name:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label htmlFor="password">Breed:</label>
          <input
            type="text"
            name="breed"
            value={breed}
            onChange={(event) => setBreed(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

// renders our component to our html file using the DOM by getting the element wiht the ID "app"
export default Form;
