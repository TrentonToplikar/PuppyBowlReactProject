import React from "react";

const AllPuppies = ({ pup: { name, id, breed, status, imageUrl } }) => {
  return (
    <>
      {/* <h2>Name: {name}</h2>
      <p>Breed: {breed}</p>
      <p> Status: {status}</p>
      <img src={imageURL} /> */}
      <div class="single-player-card">
        <div class="header-info">
          <p class="pup-title">Name: {name}</p>
          <p class="pup-number">ID: #{id}</p>
        </div>
        <img src="{imageUrl}" alt="photo of {name} the puppy" />
        <button class="detail-button" data-id={id}>
          See details
        </button>
        <button class="delete-button" data-id={id}>
          Remove from roster
        </button>
      </div>
    </>
  );
};

export default AllPuppies;
