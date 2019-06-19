import React, { useEffect } from 'react';
import { CharacterListView } from './views';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return <CharacterListView />;
};

export default App;
