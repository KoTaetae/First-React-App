import React, {useState} from "react";

const FunctionalComponent = (props) => {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
    const substractConst = () =>{
        setCount(count-1);
    };

    const { name,age, company, setName} = props;

    return(

        <div>
            <p>This is functional Component!</p>
            <button onClick={ () => setCount(count + 1)}>Click me to add 1</button>
            <button onClick = {(substractConst)}>Click me to subtract 1</button>
            <h1>{count}</h1>
            <h1>My name is {name} my age is {age} and company is {company} 
            </h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={ () => setName(changeName)}>Change name to new name!</button>
        </div>

    );
}

export default FunctionalComponent;