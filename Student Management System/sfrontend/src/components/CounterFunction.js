import React, { useState } from "react";

function CounterFunction(){

    let [number, setNumber] = useState(0) // in use state assign default value 0
    
    function increment(){
        setNumber(++number)
    }


    return(
        <div>
            <h3> Functional Component </h3>
            <h1> Counter = {number}</h1>
            <button onClick={ e=> increment() }> Increment </button>
        </div>
    )
}

export default CounterFunction;