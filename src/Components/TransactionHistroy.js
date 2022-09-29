import React from "react";

const TransactionHistory = () => {
  return (
    <div className="w-11/12">
      <h3 className="border-b-2 border-indigo-500 font-bold text-xl pt-4">
        History
      </h3>
      <ul>
        <li className="bg-white mylist relative mt-2 grid grid-cols-2 px-2 py-2 rounded-sm drop-shadow-md border-r-4 border-green-500 ">
          <span>Cash</span>
          <span className="text-right">+500</span>
          <button className="py-0.5 cursor-pointer mybtn rounded-sm bg-red-500 absolute bottom-0 -right-7">
            <i className="ri-close-line text-2xl text-white	"></i>
          </button>
        </li>
        <li className="bg-white mylist relative mt-2 grid grid-cols-2 px-2 py-2 rounded-sm drop-shadow-md border-r-4 border-green-500 ">
          <span>Cash</span>
          <span className="text-right">+500</span>
          <button className="py-0.5 cursor-pointer mybtn rounded-sm bg-red-500 absolute bottom-0 -right-7">
            <i className="ri-close-line text-2xl text-white	"></i>
          </button>
        </li>
        <li className="bg-white mylist relative mt-2 grid grid-cols-2 px-2 py-2 rounded-sm drop-shadow-md border-r-4 border-red-500 ">
          <span>Cash</span>
          <span className="text-right">-500</span>
          <button className="py-0.5 cursor-pointer mybtn rounded-sm bg-red-500 absolute bottom-0 -right-7">
            <i className="ri-close-line text-2xl text-white	"></i>
          </button>
        </li>
        <li className="bg-white mylist relative mt-2 grid grid-cols-2 px-2 py-2 rounded-sm drop-shadow-md border-r-4 border-red-500 ">
          <span>Cash</span>
          <span className="text-right">-500</span>
          <button className="py-0.5 cursor-pointer mybtn rounded-sm bg-red-500 absolute bottom-0 -right-7">
            <i className="ri-close-line text-2xl text-white	"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default TransactionHistory;
