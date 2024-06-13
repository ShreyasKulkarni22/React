import React,{Component} from "react";


class Message extends Component {

    constructor(){
        super();
        this.state = {
            message: "Welcome to ReactJS"
        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing"
        })
    
    }

    render(){
        return (
            <div>
                <h1>Hello Visitor</h1>
                <h2>{this.state.message}</h2>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;