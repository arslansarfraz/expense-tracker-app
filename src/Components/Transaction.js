import React from "react";

const Transaction = ({ transaction }) => {
  return (
    <li className="bg-white mylist relative mt-2 grid grid-cols-2 px-2 py-2 rounded-sm drop-shadow-md border-r-4 border-green-500 ">
      <span>{transaction.description}</span>
      <span className="text-right">{transaction.transactionAmount}</span>
      <button className="py-0.5 cursor-pointer mybtn rounded-sm bg-red-500 absolute bottom-0 -right-7">
        <i className="ri-close-line text-2xl text-white	"></i>
      </button>
    </li>
  );
};

export default Transaction;
