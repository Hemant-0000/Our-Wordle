import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <div className="App">
      {/* Navbar  */}
      <nav>
        <h1>Wordle</h1>
      </nav>

    {/* Grid Component  */}
    <Board/>

    {/* Keyboard Component  */}
    <Keyboard/>


    </div>
  );
}

export default App;
