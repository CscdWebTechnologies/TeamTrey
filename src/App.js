import './App.css';
import Portfolio from './portfolio.js';
import Earn from './earn.js';
import CoinTable from './table.js';
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
