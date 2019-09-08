import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faHeart as regular} from "@fortawesome/free-regular-svg-icons";

class Heart extends Component{
    
    constructor(){
        super()

    this.state ={
        complete:true,
    };

}

toggleComplete(){

this.setState({

});
}
render(){
    this.state.complete = this.state.complete ? false : true;
    const icon = this.state.complete ? (<FontAwesomeIcon className = "font" icon={faHeart} color='red'/>) : (<FontAwesomeIcon className = "font" icon={regular} color='red'/>);
    return(
        <div className="todo-item" onClick={this.toggleComplete.bind(this)}>
        {icon}
      </div>
    )}

}

export default Heart;