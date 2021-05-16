//import logo from './logo.svg';
import './App.css';
import Portfolio from './portfolio.js';
import Earn from './earn.js';
import CoinTable from './table.js';
import Trust from './trust';

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
