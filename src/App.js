
import './App.css';
import Portfolio from './portfolio.js';
import EarnSection from './earn.js';
import Table from './table.js';
import Trust from './trust';


function App() {
  return (
    <div className="bg-white h-screen">
      <Table />
      <EarnSection />
      <Portfolio />
      <Trust />
    
      
    </div>
  );
}

export default App;
