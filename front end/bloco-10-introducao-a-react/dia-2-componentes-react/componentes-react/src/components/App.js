import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import logo from './image-pokemon.png';
import './style.css';

class App extends React.Component {
  render() {
    return(
      <div className='App'>
          <div className='header'>
            <img src={logo} alt={'Pokemon'} className='pokemons-logo'/>
          </div>
          <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;