import React from "react";

const Doggy = ({ doggy, getDoggy }) => (
  <div className='App'>
    <img src={doggy.picture} alt={doggy.name} title={doggy.name} />
    <h1>{doggy.name}</h1>
    <button onClick={getDoggy}>Get A Doggy</button>
  </div>
);

export default Doggy;
