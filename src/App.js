import './App.css';
import Portfolio from './portfolio.js';
import Earn from './earn.js';
import Table from './table.js';
import HeroSection from './hero.js';
import NavigationBar from './navigationbar.js';
import Trust from './trust';
import Stats from './Stats';
import GetStarted from './GetStarted';
import StartEarning from './StartEarning';

function App() {
  return (
    <div className="bg-white h-screen">
      {/* Kdrighteo */}
      <NavigationBar />
      <HeroSection />

      {/* Ehmana */}
      <Table />
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
