import React from 'react';
const TransactionHistroy = () => {
    return (
        <div className="history">
            <h3>Transaction History</h3>
            <ul>
                <li className="plus">Item 1<span>Rs: 300</span><button className="close">X</button> </li>
                <li className="minus">Item 1<span>Rs: 300</span></li>
            </ul>
        </div>
    );
}

export default TransactionHistroy;