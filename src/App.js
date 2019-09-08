import React, { Component } from "react";
import Search from "./Search";
import Player from "./Components/Player";

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
  };




  onTermSubmit = async term => {
        const key = "AIzaSyD-Wh3hTdt8Sdyd_LdKyeslAYZeOUvVsn0";
     fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q="+term+"&type=video&videoDefinition=high&key="+key)
                  .then(res => res.json())
                  .then(
                    (result) => {
                      this.setState({
                        videos: result.items,
                        selectedVideo: result.items[0],
                      });
  
                    },
                    
                  )
                  
              }

  onVideoSelect = video => {
    this.setState({
      selectedVideo: video,
    });
  };

  render() {
   this.state.videos.shift();
    return (
      <div className="app ui container">
        <Search onTermSubmit={this.onTermSubmit} />
        <Player appState={this.state} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
