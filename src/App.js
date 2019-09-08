import React, { Component } from "react";
import Search from "./Search";
import Player from "./Components/Player";

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null,
  };



  onTermSubmit = async term => {
     fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&order=viewCount&q="+term+"&type=video&videoDefinition=high&key="+"AIzaSyD-Wh3hTdt8Sdyd_LdKyeslAYZeOUvVsn0")
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

    console.log(this.state.videos)
    return (
      <div className="app ui container">
        <Search onTermSubmit={this.onTermSubmit} />
        <Player appState={this.state} onVideoSelect={this.onVideoSelect} />
      </div>
    );
  }
}

export default App;
