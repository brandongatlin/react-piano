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
      <div id="piano">
        <div id="ivories">
          <Ivory />
          <Ivory />
          <Ivory />
          <Ivory />
          <Ivory />
          <Ivory />
          <Ivory />
          <Ivory />
        </div>

        <div id="ebonies">
          <HiddenEbony />
          <Ebony />
          <Ebony />
          <HiddenEbony />
          <Ebony />
          <Ebony />
          <Ebony />
          <HiddenEbony />
        </div>
      </div>
      )
  }
}



export default Piano;
