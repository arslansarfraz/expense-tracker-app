import React from "react";
import "./styles.css";

//Imports Components
import Header from "./Components/Header";
import { Balance } from "./Components/Balance";
import AccountSummry from "./Components/AccountSummry";
import TransactionHistroy from "./Components/TransactionHistroy";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Balance />
      <AccountSummry />
      <TransactionHistroy />
    </div>
  );
};
export default App;
