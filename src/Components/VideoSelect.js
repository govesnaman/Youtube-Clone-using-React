import React from "react";
import "../Styles/VideoSelect.css"

const VideoSelect = ({ video, onVideoSelect }) => {
    
  return (
    <div className="item" onClick={() => onVideoSelect(video)}>
      <img className="img" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div className="text">
        <div className="title">{video.snippet.title}</div>
        <div className="channel">{video.snippet.channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoSelect;
