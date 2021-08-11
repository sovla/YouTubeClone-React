import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";

import SearchBar from "./components/search_bar";
import VideosList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const YOUTUBE_API_KEY = "AIzaSyBz-NiHLXZyTowv3zmUwL41GP0lQxd8JMY";
//AIzaSyBz-NiHLXZyTowv3zmUwL41GP0lQxd8JMY
//AIzaSyDVoniUhVllCwAifzKVxr1-BQSM6RLDvrU

class App extends Component {
  constructor(props) {
    super(props);

    //state 초깃값 설정
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    console.log("API", term);

    YTSearch({ key: YOUTUBE_API_KEY, term }, (videos) => {
      this.setState({ videos: videos, selectedVideo: videos[0] });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 1000);
    return (
      <div>
        <SearchBar onSearhTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideosList
          videos={this.state.videos}
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
