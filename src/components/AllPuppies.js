import React from "react";
import { puppies } from "./Main";

const AllPuppies = (props) => {
  console.log(props);
  return (
    <div>
      <h1>All the puppies!</h1>
      {puppies ? (
        puppies.map((pup) => {
          // return (
          //   <div key={pup.id}>
          //     <h2>This puppy is {pup.name}</h2>
          //   </div>
          // );
          return (
            <div key={pup.id}>
              {/* <h2>Name: {pup.name}</h2>
              <p>Breed: {pup.breed}</p>
              <p> Status: {pup.status}</p> */}
              <div class="single-player-card">
                <div class="header-info">
                  <p class="pup-title">Name: {pup.name}</p>
                  <p class="pup-number">ID: #{pup.id}</p>
                </div>
                <img src={pup.imageUrl} alt="photo of {name} the puppy" />
                <button class="detail-button" data-id={pup.id}>
                  See details
                </button>
                <button class="delete-button" data-id={pup.id}>
                  Remove from roster
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h2>No puppies here, oops</h2>
      )}
    </div>
  );
};
// const AllPuppies = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>All The Puppies</h1>
//       {props.puppies.map((pup) => {
//         return <h2>This puppy is {pup}</h2>;
//       })}
//     </div>
//   );
// };

export default AllPuppies;
