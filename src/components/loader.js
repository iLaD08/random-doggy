import React from "react";
import BeatLoader from "react-spinners/BeatLoader";

const Loader = ({ loading }) => (
  <BeatLoader color='yellow' size={20} loading={loading} />
);

export default Loader;
