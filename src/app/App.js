import React, { Component } from "react";
import { Places } from "./Places";
import Baselist from "../components/Baselist";
import SearchBox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scrollpane";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Places: Places,
      searchfield: "",
    };
  }

  //   componentDidMount() {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((users) => this.setState({ Places: users }));
  //   }

  onSearhChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredPlaces = this.state.Places.filter((Places) => {
      return (
        Places.name
          .toLowerCase()
          .includes(this.state.searchfield.toLowerCase()) ||
        Places.city.toLowerCase().includes(this.state.searchfield.toLowerCase())
      );
    });
    return (
      <div className="tc">
        <h1 className="f1">
          <div className="rbf">Best Tourist Places In INDIA</div>
        </h1>
        <SearchBox searchChange={this.onSearhChange} />
        <Scroll>
          <div className="container">
            <Baselist Places={filteredPlaces} />
          </div>
        </Scroll>
      </div>
    );
  }
}
export default App;
