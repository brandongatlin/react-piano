import React, { Component } from 'react';
import './App.css';

import Start from './components/Start';
import Score from './components/Score';
import MessageBox from './components/MessageBox';
import Piano from './components/piano/Piano';

let soundArray = ['sounds/a1.wav', 'sounds/a1s.wav', 'sounds/b1.wav', 'sounds/c1.wav', 'sounds/c1s.wav', 'sounds/d1.wav', 'sounds/e1.wav', 'sounds/f1.wav', 'sounds/f1s.wav', 'sounds/g1.wav', 'sounds/g1s.wav', 'sounds/c2.wav', 'sounds/d1s.wav'];




class App extends Component {

  getRandomNote = (props) => {
    let randomNote = soundArray[Math.floor(Math.random() * soundArray.length)];
    console.log(`randomNote is ${randomNote}`);
  }

  render() {
    return (
      <div className="App">
        <div id="info">
          <Start getRandomNote={this.getRandomNote}/>
          <Score />
          <MessageBox />
        </div>
        <Piano />

      </div>
    );
  }
}

export default App;

//components that I need:
//ivory key
//ebony key
//piano (made of both keys)
