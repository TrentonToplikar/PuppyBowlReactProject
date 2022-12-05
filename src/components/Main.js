import React from "react";
import AllPuppies from "./AllPuppies";
import SinglePuppy from "./SinglePuppy";
import Form from "./Nav.js";

export const puppies = [
  {
    id: 9979,
    name: "Doggy Ruffman",
    breed: "",
    status: "bench",
    imageUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2022-12-03T23:47:05.574Z",
    updatedAt: "2022-12-03T23:47:05.574Z",
    teamId: 533,
    cohortId: 283,
  },
  {
    id: 9982,
    name: "Puppers",
    breed: "",
    status: "bench",
    imageUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2022-12-04T01:51:38.299Z",
    updatedAt: "2022-12-04T01:51:38.299Z",
    teamId: 532,
    cohortId: 283,
  },
  {
    id: 9983,
    name: "GoodBoy2",
    breed: "",
    status: "bench",
    imageUrl:
      "https://learndotresources.s3.amazonaws.com/workshop/60ad725bbe74cd0004a6cba0/puppybowl-default-dog.png",
    createdAt: "2022-12-04T01:51:41.323Z",
    updatedAt: "2022-12-04T01:51:41.323Z",
    teamId: 532,
    cohortId: 283,
  },
];

const Main = (props) => {
  console.log(props);
  return (
    <div>
      <h1> Welcome to My Puppy Emojis</h1>
      <Form />
      <AllPuppies puppies={puppies[0]} />
      <SinglePuppy pup={puppies[0]} />
    </div>
  );
};

export default Main;
