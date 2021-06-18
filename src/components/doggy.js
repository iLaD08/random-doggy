import React from "react";

const Doggy = ({ doggy }) => (
  <div className='App'>
    <img src={doggy.picture} alt={doggy.name} title={doggy.name} />
    <h1>{doggy.name}</h1>
  </div>
);

export default Doggy;
