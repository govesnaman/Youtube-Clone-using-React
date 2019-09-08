import React from "react";
import VideoSelect from "./VideoSelect";

const List = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video, idx) => {
    return <VideoSelect key={idx} video={video} onVideoSelect={onVideoSelect} />;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default List;
