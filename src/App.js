import './App.css';
import Portfolio from './Portfolio.js';
import Earn from './Earn.js';
import CoinTable from './CoinTable.js';
import Trust from './Trust';
import Stats from './Stats';
import GetStarted from './GetStarted';
import StartEarning from './StartEarning';

function App() {
  return (
    <div className="bg-white h-screen">

      {/* Ehmana */}
      <CoinTable />
      <Earn />
      <Portfolio />
      <Trust />

      {/* Othniel */}
      <Stats />
      <GetStarted />
      <StartEarning />


    </div>
  );
}

export default App;
