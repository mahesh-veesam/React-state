import { useState } from "react";

function LikeButton(){

    let [liked , setLiked] = useState(true)
    let [count, setCount] = useState(0)

    function like(){
        setLiked(!liked)
        console.log("clicked like button")
        liked ? setCount(count + 1) : count = count + 0
    }
    
    let styles = {
        fontSize : "60px",
        color : "red"
    }

    return(
        <div >
            <p onClick={like} style={styles}>
            { liked ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
            </p>
            <p>Likes count : {count}</p>
        </div>
    )
}

export default LikeButton;