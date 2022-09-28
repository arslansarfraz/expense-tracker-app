import React from "react";
import "./styles.css";

// Import Components
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import AccountSummry from "./Components/AccountSummry";
import TransactionHistory from "./Components/TransactionHistroy";
import AddTransaction from "./Components/AddTransaction";

const App = () => {
  return (
    <div className="app mx-auto p-6 bg-slate-200 align-middle w-4/12">
      <Header />
      <Balance />
      <AccountSummry />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
};
export default App;
