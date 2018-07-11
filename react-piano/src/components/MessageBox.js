import React, {Component} from "react";

class MessageBox extends Component {
  constructor(props) {
        super(props);
    }

    render() {
      return (
      <div>
        <h2>Message</h2>
        <h3 id="message">{this.props.Message}</h3>
      </div>
    )
    }
  }


export default MessageBox;
