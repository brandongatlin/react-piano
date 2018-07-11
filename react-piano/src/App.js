import React, { Component } from 'react';
import './App.css';

import Start from './components/Start';
import Score from './components/Score';
import MessageBox from './components/MessageBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Start />
        <Score />
        <MessageBox />
        {/* <Piano /> */}

      </div>
    );
  }
}

export default App;

//components that I need:
//ivory key
//ebony key
//piano (made of both keys)
