import React from "react";
import "./styles.css";

// Import components
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import AccountSummry from "./Components/AccountSummry";
import TransactionHistory from "./Components/TransactionHistroy";
import AddTransaction from "./Components/AddTransaction";
// Import GlobalProvider
import { GlobalProvider } from "./context/GolabalState";

const App = () => {
  return (
    <GlobalProvider>
      <div className="app mx-auto p-6 bg-slate-200 align-middle w-4/12">
        <Header />
        <Balance />
        <AccountSummry />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};
export default App;
