import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GolabalState';
const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const transactionAmounts = transactions.map(transaction => transaction.transactionAmount);
  const balance = transactionAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div className="py-8">
      <p>Your Balance</p>
      <h2 className="text-2xl font-bold">${balance}</h2>
    </div>
  );
};
export default Balance;
