import React  from "react";
import "../Styles/PlayerDetails.css";
import Heart from "./Heart";
import CommentArea from "./CommentArea"
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const PlayerDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div className = "novids">No Videos Found</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  
  const { description, title, channelTitle } = selectedVideo.snippet;
  



  return (
    <div>
      <div className="player">
        <iframe id = "main" title={description} src={videoSrc} frameBorder="0" height="450px" width= "100%"/>
      </div>
      <div className="text">
      <Heart />
        <h4>{title}</h4>
        
        <p className = "grey">{channelTitle}</p>
      </div>
      
     <CommentArea/>
    </div>
  );
};

export default PlayerDetails;
