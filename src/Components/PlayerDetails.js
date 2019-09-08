import React  from "react";
import "../Styles/PlayerDetails.css";
import Heart from "./Heart";
import CommentBox from "./CommentBox";

// import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const PlayerDetails = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Loading...</div>;
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
      
     <p className="comments"> Comments </p>
     <div className="textboxes">
    <form>
     <input type="text" className="writer" placeholder="Author"/>
     <input type="text" className="writer" placeholder="Comment"/>
     <div className="buttons">
     <input className="btnss" type="Submit" value="Comment"/>
     <input className="btnss" type="button" value="Cancel"/>
     </div>
     </form>
     <CommentBox/>
     </div>
    </div>
  );
};

export default PlayerDetails;
