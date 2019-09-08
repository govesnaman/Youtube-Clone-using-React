import React from "react";






const Comments = () => {
  console.log("trying")
  const renderedList = this.props.appState.map((author, comment) => {
    return <div>{author}</div> ;
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default Comments;

