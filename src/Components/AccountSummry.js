import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GolabalState';

const AccountSummry = () => {

  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);

  const income = transactionAmounts
    .filter(transaction => transaction > 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
    .toFixed(2);

  const expense = Math.abs(transactionAmounts
    .filter(transaction => transaction < 0)
    .reduce((acc, transaction) => (acc += transaction), 0)
  ).toFixed(2);

  return (
    <div className="w-11/12 grid grid-cols-2 divide-x bg-white py-3 rounded-md	">
      <div className="text-center">
        Income
        <br />
        <span className="font-bold text-xl">{income}</span>
      </div>
      <div className="text-center">
        Expense
        <br />
        <span className="font-bold text-xl">{expense}</span>
      </div>
    </div>
  );
};
export default AccountSummry;
