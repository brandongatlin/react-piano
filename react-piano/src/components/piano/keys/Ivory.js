import React, {
  Component
} from "react";

class Ivory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ivory key" onClick={this.props.getRandomNote}></div>
    )
  }
}



export default Ivory;
