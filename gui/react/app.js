import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.window = this.props.window;
    this.test = this.test.bind(this);
    this.state = this.props.state;
    this.setState = this.props.window.Main.setState;
  }
  test() {
    this.setState({ name: "Walter Winser" });
  }
  render() {
    return <div onClick={this.test}>Hello {this.state.name}</div>;
  }
}
