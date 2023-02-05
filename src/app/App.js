import React, { Component } from "react";
import { robots } from "./robots";
import CardList from "../components/Cardlist";
import SearchBox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((users) => this.setState({ robots: users }));
  //   }

  onSearhChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredrobots = this.state.robots.filter((robots) => {
      return (
        robots.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        robots.city.toLowerCase().includes(this.state.searchfield.toLowerCase())
      );
    });
    return (
      <div className="tc">
        <h1 className="f1">
          <div className="rbf">
            Best Tourist Places In <span class="india">INDIA</span>
          </div>
        </h1>
        <SearchBox searchChange={this.onSearhChange} />
        <Scroll>
          <div className="container">
            <CardList robots={filteredrobots} />
          </div>
        </Scroll>
      </div>
    );
  }
}
export default App;
