import React, {
  Component
} from "react";

class Ebony extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ebony key" onClick={this.props.getRandomNote}></div>
    )
  }
}



export default Ebony;
