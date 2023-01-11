import "./App.css";
import { Component, React } from "react";
import Hello from "./components/Hello";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      name: "Jake Sully",
      login: true,
    };
  }
  componentDidMount() {
    const timer = () =>
      this.setState({
        date: new Date(),
      });
    setInterval(timer, 1000);
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Pandora</h1>
        <p>{this.state.date.toLocaleString()}</p>
        {this.state.login ? (
          <Hello name={this.state.name} />
        ) : (
          <h2>Please Login</h2>
        )}
      </div>
    );
  }
}

export default App;
