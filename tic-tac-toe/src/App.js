// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import Player from "./components/Player";
import Board from './components/Board';


function App() {
  return (
    <div>
      <Header />
      <Player whichPlayer='x' />
      <Player whichPlayer='o' />
      <Board />
    

    </div>
  );
}

export default App;

