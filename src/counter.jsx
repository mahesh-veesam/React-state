import { useState } from "react";

function Counter(){

    let [count, setCount] = useState(0)

    function incCount(){
        setCount(count + 1)
        console.log(count)
    }
    function decCount(){
        setCount(count-1)
    }

    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount} >Increase Count</button>
            <button onClick={decCount} >Decrease Count</button>
        </div>
    )
}

export default Counter;