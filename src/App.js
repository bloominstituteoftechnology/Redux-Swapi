import React, {Component} from 'react';

import {CharacterListView} from './views';
import './styles/App.css';

class App extends Component {
  render() {
    console.log('app');
    return <CharacterListView />;
  }
}

export default App;
