import React from "react"


export default function Dice(props) {
   
console.log(props)

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    
    return (
   <div>
       <h2 className="dice" style ={styles} onClick={props.holdDice}>{props.value} </h2>   
   </div>
   )
}