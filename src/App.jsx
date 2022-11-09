import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import {Routes, Route} from "react-router-dom"
import PokemonDisplay from './views/PokemonDisplay';

function App() {
  return (
    <fieldset>
      <legend>App.jsx</legend>
      <Search />
      <Routes>
        <Route path = '/pokemon/:pokemon_id' element = {<PokemonDisplay />} />
      </Routes>
    </fieldset>
  );
}

export default App;
