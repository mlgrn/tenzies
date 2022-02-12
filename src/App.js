import React from "react"
import "./style.css"
import Dice from "./components/Dice"

function allNewDice() {
    
}

export default function App() {

    return (
    <div className="app">
        <main className="main-el">
            <h1>Tenzies</h1>
        <div className="dice-wrap">
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
            <Dice value="1"/> 
              
          
        </div>
           
        
        
        </main>
    </div>    
    )
}