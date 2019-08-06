import React from 'react';
import './App.css';

import Menu from './components/Menu/Menu';
import CharactersList from './components/CharactersList/CharactersList';
import EpisodesList from './components/EpisodesList/EpisodesList';

function App() {
  return (
    <div>
      <Menu />
      <CharactersList />
      {/*<EpisodesList />*/}
    </div>
  );
}

export default App;
