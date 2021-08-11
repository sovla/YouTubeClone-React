import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";

const YOUTUBE_API_KEY = "AIzaSyDVoniUhVllCwAifzKVxr1-BQSM6RLDvrU";

YTSearch({ key: YOUTUBE_API_KEY, term: "surfboards" }, (data) => {
  this.state({ viedos: data });
});

class App extends Component {
  constructor(props) {
    super(props);

    //state 초깃값 설정
    this.state = {
      viedos: [],
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
