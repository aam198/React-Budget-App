import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export default function TransactionList() {

    const { transactions } = useContext(GlobalContext);

    return (
        <div className="history-container">
            <h2>History</h2>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                
            </ul>
        </div>
    )
}
