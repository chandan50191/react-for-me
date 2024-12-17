import logo from './logo.svg';
import './App.css';
import RandomColor from './components/random-color/RandomColor';

function App() {
  return (
    <div className="App">
      {/* Color generator */}
      <RandomColor/>
    </div>
  );
}

export default App;
