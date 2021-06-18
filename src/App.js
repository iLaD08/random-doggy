import React, { useState, useEffect } from "react";
import Loader from "./components/loader";
import getDoggy from "./actions/getDoggy";
import Doggy from "./components/doggy";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [doggy, setDoggy] = useState("");

  useEffect(() => getDoggy({ setDoggy, setLoading }), []);

  return (
    <div className='App'>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <div>
          <Doggy doggy={doggy} />
          <button
            onClick={() => {
              setLoading(true);
              getDoggy({ setDoggy, setLoading });
            }}>
            Get A Doggy
          </button>
        </div>
      )}
      <footer>
        <a href='https://thedogapi.com/' target='_blank' rel='noreferrer'>
          THE DOG API
        </a>
      </footer>
    </div>
  );
};

export default App;
