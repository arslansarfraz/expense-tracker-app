import React, { useState, useContext } from 'react';

// Import the Global State
import { GlobalContext } from '../context/GolabalState';

const AddTransaction = () => {
  const [description, setDescription] = useState();
  const [transactionAmount, setTransactionAmount] = useState();
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: new Date().getTime(),
      description,
      transactionAmount: +transactionAmount
    }

    addTransaction(newTransaction);

  }

  return (
    <div className="w-11/12">
      <h3 className="border-b-2 border-indigo-500 font-bold text-xl pt-4">
        Add New Transaction
      </h3>

      <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-2">
        <div className="form-control mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Detail of Transaction"
            required="required"
          />
        </div>
        <div className="form-control mb-4">
          <label htmlFor="transactionamount" className="block text-gray-700 text-sm font-bold mb-2">
            Transaction Amount
          </label>
          <input type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="transactionamount"
            value={transactionAmount}
            onChange={(e) => setTransactionAmount(e.target.value)}
            placeholder="Dollar Value of Transaction"
            required="required"
          />
          <p>
            Note Please:
            <br />
            (Negitive-Expense, Positive+Income)
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className=" btn bg-blue-500 hover:bg-blue-700 cursor-pointer text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};
export default AddTransaction;