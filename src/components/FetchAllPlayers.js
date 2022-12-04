import React from "react";

const FetchAllPlayers = async () => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2211-FTB-ET-WEB-FT/players"
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export default FetchAllPlayers;
