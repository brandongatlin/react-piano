import React, {Component} from "react";

class Score extends Component {
  constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    render() {
      return (
      <div>
        <h2>Current Score</h2>
        <h3 id="Score">{this.props.Score}</h3>
      </div>
    )
    }
  }


export default Score;
