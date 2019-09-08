import React, {Component} from "react";
import "../Styles/CommentArea.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
class CommentArea extends Component{
    
    constructor(){
        super();
        this.state = {
        commentArray : [],
        author: "",
        comment: "",
          };
    } 
      onFormSubmit = event => {
        event.preventDefault();
        console.log(this);
        const newCommentArray = [...this.state.commentArray];
        newCommentArray.push({author:this.state.author,comment: this.state.comment});
        this.setState({
        commentArray: newCommentArray
        });
       console.log(this.state);
       this.setState({
        author : "",
        comment : ""});
       console.log(this);

      };

      onInputChange = event => {
          
        this.setState({
          author: event.target.value,
        });
      }
    onInputChange1 = event => {
            this.setState({
              comment: event.target.value,
            });
            //this.com.comment = event.target.value;

      
      };
     cancel=()=>{
        this.setState({author : "",
       comment : ""});
    }

render()
{ console.log(this.state.commentArray);
    const list = this.state.commentArray.map((anObjectMapped) => {
        return (<div className = "commentar">
            
            <p className="username" key={'${anObjectMapped.author}_{anObjectMapped.comment}'}>
            <FontAwesomeIcon className="icon" icon={faUser} size = "fa-lg"/>
                {anObjectMapped.author}
            </p>
            <p className="comment" key={'${anObjectMapped.author}_{anObjectMapped.comment}'}>
            {anObjectMapped.comment}
        </p>
        </div>
      );})
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