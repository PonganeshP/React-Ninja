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
      people: ["Jake Sully", "Neytri", "Neteyam", " Lo'ak"],
    };
  }
  componentDidMount() {
    // const timer = () =>
    //   this.setState({
    //     date: new Date(),
    //   });
    // setInterval(timer, 5000);
  }
  render() {
    return (
      <div className="App">
        <h1>Welcome to Pandora</h1>
        <p>{this.state.date.toLocaleString()}</p>
        {this.state.login ? (
          <Hello name={this.state.name}>
            <h1>Varum aana varadhuu.....</h1>
            <h2>Hello mister...</h2>
          </Hello>
        ) : (
          <h2>Please Login</h2>
        )}

        <h3>People in Pandoraa</h3>
        <div>
          {this.state.people.map((p) => {
            return <p key={p.toString()}>{p}</p>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
