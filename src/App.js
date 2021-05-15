//import logo from './logo.svg';
import './App.css';
import Portfolio from './Portfolio.js';
import Earn from './Earn.js';
import CoinTable from './CoinTable.js';
import Trust from './Trust';

function App() {
  return (
    <div className="bg-white h-screen">
    
      <CoinTable />
      <Earn />
      <Portfolio />
      <Trust />
    
      
    </div>
  );
}

export default App;
