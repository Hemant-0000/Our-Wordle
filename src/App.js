import { createContext, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import { boardDefault } from './Words';

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault)
  return (
    <div className="App">
      {/* Navbar  */}
      <nav>
        <h1>Wordle</h1>
      </nav>

      <AppContext.Provider value={{ board, setBoard }}>
        {/* Grid Component  */}
        <Board />
        {/* Keyboard Component  */}
        <Keyboard />
      </AppContext.Provider>


    </div>
  );
}

export default App;
