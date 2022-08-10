import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import WhitePaper from './components/WhitePaper/WhitePaper';
import Team from './components/Team/Team';
import Roadmap from './components/Roadmap/Roadmap';
import Tokenomics from './components/Tokenomics/Tokenomics';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <WhitePaper />
      <Team />
      <Roadmap />
      <Tokenomics />
    </div>
  );
}

export default App;
