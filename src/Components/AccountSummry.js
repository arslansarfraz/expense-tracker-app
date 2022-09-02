import React from 'react';
const AccountSummry = () => {
    return (
        <div className="textLeft bg">
            <div className="income">
                <h3>Income</h3>
                <p className="plus">Rs: 300</p>
            </div>
            <div className="expense">
                <h3>Expense</h3>
                <p className="minus">Rs: 400</p>
            </div>
        </div>
    );
}

export default AccountSummry;