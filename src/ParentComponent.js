import React,{Component} from "react";
import Child from "./ChildComponent";

class Parent extends Component{

    constructor(props){
        super(props);
        this.state = {
            name : "Parent"
        }
    }

    greetParent(childname){
        alert(`Hello Parent from ${childname}`)
    }

    render(){
        return (
            <div>
                <h1>{this.state.name}</h1>
                <Child greetParent={this.greetParent}/>
            </div>
        )
    }

}

export default Parent;

