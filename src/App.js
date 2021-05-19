export default App;

import './App.css';
import Portfolio from './portfolio.js';
import EarnSection from './earn.js';
import Table from './table.js';
import Trust from './trust';
import HeroSection from './hero.js';
import NavigationBar from './navigationbar.js';


function App() {
  return (
    <div className="bg-white h-screen">
      <NavigationBar />
      <HeroSection />
    
      <Table />
      <EarnSection />
      <Portfolio />
      <Trust />
    
      
    </div>
  );
}

export default App;
