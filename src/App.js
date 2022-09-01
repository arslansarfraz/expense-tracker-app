import React from "react";
import "./styles.css";

//Imports Components
import Header from "./Components/Header";
import { Balance } from "./Components/Balance";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Balance />
    </div>
  );
};
export default App;
