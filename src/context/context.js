import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = [];

export const ExpenseTrackerContext = createContext(initialState)

export const Provider = ({children}) => {
    const [transactions, dispatch] = useReducer(contextReducer, initialState);

    //Action Creators these functions will be changint the state of transactions
    const  deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    const  addTransaction = (transaction) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }


    return (
        <ExpenseTrackerContext.Provider value={{
            deleteTransaction, addTransaction
        }}>
            { children }
        </ExpenseTrackerContext.Provider>
    )

}
