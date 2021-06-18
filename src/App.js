import React, { useState, useEffect } from "react";
import getDoggy from "./actions/getDoggy";
import Doggy from "./components/doggy";
import "./App.css";

const App = () => {
  const [doggy, setDoggy] = useState({
    name: "",
    picture: "",
  });

  useEffect(() => getDoggy({ setDoggy }), []);

  return (
    <div className='App'>
      <Doggy doggy={doggy} />
      <button onClick={() => getDoggy({ setDoggy })}>Get A Doggy</button>
      <footer>
        <a href='https://thedogapi.com/' target='_blank' rel='noreferrer'>
          THE DOG API
        </a>
      </footer>
    </div>
  );
};

export default App;
