import './App.css';
import Portfolio from './portfolio.js';
import EarnSection from './earn.js';
import Table from './table.js';
import Trust from './trust';
import HeroSection from './hero.js';
import NavigationBar from './navigationbar.js';
import Stats from "./Stats";
import Getstarted from "./GetStarted";
import StartEarning from "./StartEarning"
import Footer from "./Footer"


function App() {
  return (
    <div className="bg-white h-screen">
      <NavigationBar />
      <HeroSection />

      <Table />
      <EarnSection />
      <Portfolio />
      <Trust />

      <Stats />
      <Getstarted />
      <StartEarning />
      <Footer />

    </div>
  );
}

export default App;
