import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export default function TransactionList() {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        //right now just firing off a warning to end loop, can add: eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="history-container">
            <h2>History</h2>
            <ul className="list">
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                
            </ul>
        </div>
    )
}
