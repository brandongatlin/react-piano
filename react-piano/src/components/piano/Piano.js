import React, {
  Component
} from "react";

import Ivory from './keys/Ivory';
import Ebony from './keys/Ebony';
import HiddenEbony from './keys/HiddenEbony';


class Piano extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <div id="piano" >
        <div id="ivories">
          <Ivory value="c1" src="sounds/c1.wav"/>
          <Ivory value="d1" src="sounds/d1.wav"/>
          <Ivory value="e1" src="sounds/e1.wav"/>
          <Ivory value="f1" src="sounds/f1.wav"/>
          <Ivory value="g1" src="sounds/g1.wav"/>
          <Ivory value="a1" src="sounds/a1.wav"/>
          <Ivory value="b1" src="sounds/b1.wav"/>
          <Ivory value="c2" src="sounds/c2.wav"/>
        </div>

        <div id="ebonies">
          <HiddenEbony />
          <Ebony value="c1s" src="sounds/c1s.wav"/>
          <Ebony value="d1s" src="sounds/d1s.wav"/>
          <HiddenEbony />
          <Ebony value="f1s" src="sounds/f1s.wav"/>
          <Ebony value="g1s" src="sounds/g1s.wav"/>
          <Ebony value="a1s" src="sounds/a1s.wav"/>
          <HiddenEbony />
        </div>
      </div>
      )
  }
}

export default Piano;
