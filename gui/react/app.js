import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.window = this.props.window;
    this.test = this.test.bind(this);
    this.state = this.props.state;
    this.setState = this.props.window.Main.setState;
    this.ipc = this.props.ipc;
  }
  UNSAFE_componentWillMount() {
    this.ipc.send("init", "");
    this.ipc.reply();
    setTimeout(() => {
      this.ipc.set({ name: "changed from react" });
    }, 5000);
  }
  test() {
    this.setState({ name: "Walter Winser" });
    this.ipc.send("hello", "walter");
    this.ipc.reply("name");
  }
  render() {
    return (
      <div onClick={this.test}>
        Hello {this.state.name}{" "}
        {this.state.date ? <p>Last updated on {this.state.date}</p> : ""}
      </div>
    );
  }
}
