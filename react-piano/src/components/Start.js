import React, {
  Component
} from "react";

class Start extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button type="button" onClick={this.props.start}>Start</button>
    )
  }
}



export default Start;
