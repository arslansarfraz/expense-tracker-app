import React from "react";
import "./styles.css";

//Imports Components
import Header from "./Components/Header";
import { Balance } from "./Components/Balance";
import AccountSummry from "./Components/AccountSummry";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Balance />
      <AccountSummry />
    </div>
  );
};
export default App;
