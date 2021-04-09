import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const AddTransaction = ()=> {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    // Adding action
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        // adding +amount will change amount to a number instead of string
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);

        // clearing out the input form
        setAmount('');

        setText('');


     }
    

    return (
        <>
         <div className="transaction-container">
            <h3>Add new transaction:</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Item:</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                
                <div className="form-control amount">
                <label htmlFor="amount">Amount: <br /><span class="small">
                       (negative expense, positive income)</span></label
                >
                <input type="text" value={numberWithCommas(amount)} onChange={(e) => setAmount(e.target.value)} placeholder="Enter $ amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
         </div>
        </>
    )
}
