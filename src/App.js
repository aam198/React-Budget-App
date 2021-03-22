import { Header } from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <> 
    <div className="main-container">
    <GlobalProvider>
     
      <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
     
    </ GlobalProvider>
    </div>
    </>
  );
}

export default App;
