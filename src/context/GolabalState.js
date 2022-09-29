import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
// Create the Inital State
const initalState = {
    transactions: [
        { id: 1, description: "Income 1", transactionAmount: 100 },
        { id: 2, description: "Expense 2", transactionAmount: -200 },
        { id: 3, description: "Income 3", transactionAmount: 300 },
        { id: 4, description: "Expense 4", transactionAmount: -400 },
    ],
};

// Create the Global Context
export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);
    return (
        <GlobalContext.Provider value={{ transactions: state.transactions }}>
            {children}
        </GlobalContext.Provider>
    );
};
