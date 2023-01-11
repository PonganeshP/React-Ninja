import "./App.css";
import { Component, React } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
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
        <h1>Hello World</h1>
        <p>{this.state.date.toLocaleString()}</p>
      </div>
    );
  }
}

export default App;
