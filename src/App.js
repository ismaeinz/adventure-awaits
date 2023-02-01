import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <h1>
        Stop At 1:12
        <Link
          to={"https://www.youtube.com/watch?v=I2UBjN5ER4s&list=LL&index=45"}
        >
          The Link
        </Link>
        <p>
          <Link
            to={
              "https://github.com/briancodex/react-website-v1/tree/master/src"
            }
          >
            Github
          </Link>
        </p>
      </h1>
      <Navbar />
      <Home />
    </>
  );
};

export default App;
