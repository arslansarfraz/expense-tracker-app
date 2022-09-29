import React from "react";

const AccountSummry = () => {
  return (
    <div className="w-11/12 grid grid-cols-2 divide-x bg-white py-3 rounded-md	">
      <div className="text-center">
        INCOME
        <br />
        <span className="font-bold text-xl">$500.00</span>
      </div>
      <div className="text-center">
        EXPENSE
        <br />
        <span className="font-bold text-xl">$500.00</span>
      </div>
    </div>
  );
};
export default AccountSummry;
