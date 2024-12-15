import logo from './logo.svg';
import './App.css';
import Index from './components/Accordian/Index';
import ScrollToTopAndBottom from './components/Scroll-To-Section/ScrollToTopAndBottom';
import ScrollToSection from './components/Scroll-To-Section/ScrollToSection';

function App() {
  return (
    <div className="App">
      {/* Accourdian component */}
      <Index/>
      <ScrollToTopAndBottom/>
      <ScrollToSection/>
    </div>
  );
}

export default App;
