import React from "react";

const AllPuppies = ({ pup: { name, breed, status, imageURL } }) => {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Breed: {breed}</p>
      <p> Status: {status}</p>
      <img src={imageURL} />
    </>
  );
};

export default AllPuppies;
