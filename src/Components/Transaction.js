import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GolabalState';

const Transaction = ({ transaction }) => {
  const { delTransaction } = useContext(GlobalContext);

  const sign = transaction.transactionAmount > 0 ? '+' : '-';
  const transactionType = transaction.transactionAmount > 0 ? 'bg-white mylist relative mt-2 grid grid-cols-2 px-2 py-2 rounded-sm drop-shadow-md border-r-4 border-green-500 border-green-500' : 'bg-white mylist relative mt-2 grid grid-cols-2 px-2 py-2 rounded-sm drop-shadow-md border-r-4 border-green-500 border-red-500';
  return (
    <li className={transactionType}>
      <span>{transaction.description}</span>
      <span className="text-right">{sign}${Math.abs(transaction.transactionAmount)}</span>
      <button onClick={() => delTransaction(transaction.id)} className="py-0.5 cursor-pointer mybtn rounded-sm bg-red-500 absolute bottom-0 -right-7">
        <i className="ri-close-line text-2xl text-white	"></i>
      </button>
    </li>
  );
};

export default Transaction;
