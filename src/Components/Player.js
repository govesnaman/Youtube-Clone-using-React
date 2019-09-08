import React, { Component } from "react";
import PlayerDetails from "./PlayerDetails";
import "../Styles/Player.css"
import List from "./List";

class Player extends Component {
  render() {
    return (
      <div className="ui grid">
        <div className="box">
          <div className="column1">
            <PlayerDetails selectedVideo={this.props.appState.selectedVideo} />
          </div>
          <div className="column2">
            <List videos={this.props.appState.videos} onVideoSelect={this.props.onVideoSelect} />
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
