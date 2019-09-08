import React, {Component} from "react";

class CommentArea extends Component{
    constructor(){
        super();
        this.state = {
            author: "",
            comment: "",
          };
        this.x = [];
    }
      onFormSubmit = event => {
        event.preventDefault();
        console.log(this);
       this.x.push(this.state);
       console.log(this.x);
      };
      onInputChange = event => {
        this.setState({
          author: event.target.value,
        });}
    onInputChange1 = event => {
            this.setState({
              comment: event.target.value,
            });
      
      };
     cancel=()=>{
         console.log("enetered cancel")
        this.setState({author : "",
       comment : ""});
    }

render()
{ const list = this.x.map((author, comment) => {
    console.log("trying");
    return <div>{author}{comment}</div>;
  });
  return (
<div>
<p className="comments"> Comments </p>
     <div className="textboxes">
    <form onSubmit={this.onFormSubmit}>
     <input type="text" className="writer" placeholder="Name" value={this.state.author} onChange={this.onInputChange}/>
     <input type="text" className="writer" placeholder="Comment" value={this.state.comment} onChange={this.onInputChange1}/>
     <div className="buttons">
     <input className="btnss" type="Submit" value="Comment"/>
     <input className="btnss" type="button" onClick={this.cancel} value="Cancel"/>
     </div>
     </form>
     {list}
     </div>
     </div>
)};


  }




export default CommentArea;