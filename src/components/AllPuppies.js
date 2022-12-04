import React from "react";

const AllPuppies = (props) => {
  console.log(props);
  return (
    <div>
      <h1>All the puppies!</h1>
      {/* THERE IS AN ERROR IN THE MAPS FUNCTION */}
      {props.puppies ? (
        props.puppies.map((pup) => {
          return (
            <div key={pup.id}>
              <h2>This puppy is {pup.name}</h2>
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
