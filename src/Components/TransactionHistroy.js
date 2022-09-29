import React, { useContext } from "react";
import { GlobalContext } from "../context/GolabalState";
import Transaction from "./Transaction";

const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div className="w-11/12">
      <h3 className="border-b-2 border-indigo-500 font-bold text-xl pt-4">
        History
      </h3>
      <ul>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} />

        ))}
      </ul>
    </div>
  );
};
export default TransactionHistory;
