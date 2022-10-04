import React from "react";
import BaseHoc from "../hoc/BaseHoc";

class ClassComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            name : "Komal",
            age : 20,
        };
        console.log("Constructor: ");
    }

    componentDidMount(){
        console.log("Component did Mount!");
    }

    componentDidUpdate(){
        console.log("Component did update!");
    }

    componentWillUnmount() {
        console.log("Component did unmount ");
    }

    render(){
        console.log("Render: ");

        return (
            <div>
            <p>This is Class Component!</p>
            <button onClick = {() =>  
            this.setState({
                ...this.state,
                age:22,
            })
            }
            >
                Add 1 to Age</button>
            <h1>{this.state.age}</h1>
            </div>
        );
    }
}

export default BaseHoc(ClassComponent);
