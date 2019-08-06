import React from 'react';
import './App.css';

import Menu from './components/Menu/Menu';
import Character from './components/Character/Character';
import CharactersList from './components/CharactersList/CharactersList';

function App() {
  return (
    <div>
      <Menu />
      <CharactersList />
    </div>
  );
}

export default App;
