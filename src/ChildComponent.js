import React,{Component} from "react";

class Child extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : "Child1"
        }
    }


    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.props.greetParent(this.state.name)}>Greet</button>
            </div>
        )
    }

}

export default Child;