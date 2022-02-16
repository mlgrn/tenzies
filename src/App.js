import React from "react"
import "./style.css"
import Dice from "./components/Dice"
import {nanoid} from "nanoid"




export default function App() {
    
    function allNewDice() {
    
        const randomArr = []
    // loops over randomArr and returns it with 10 random numbers in the array
        for (let i = 0; i < 10; i++) {
            randomArr.push({value: Math.floor(Math.random()* 6 + 1), 
                isHeld: false, 
                id: nanoid()}) 
                
            
        }

        return randomArr
    }

    // allows the dice to be held by flipping the value of isHeld to true
    function holdDice(id) {
            setNum((oldDice) => oldDice.map(die => {
                return die.id === id ? 
                {...die, isHeld: !die.isHeld} 
                : die
            }
               
            )
            )  
    }
 
    // set state and immediately call allNewDice function to get set up
    const [num, setNum] = React.useState(allNewDice())

  
    function newRoll() {
        
        setNum(oldDice => oldDice.map(die => {
            return die.isHeld ? 
            die
            : {value: Math.floor(Math.random()* 6 + 1), 
            isHeld: false, 
            id: nanoid()}
        }))
    }
    


    // maps over num array(which was set by randomArr in allNewDice function) and returns 
    //a new array, diceElements, which contains <Dice/> 
    // components, rendered with the corresponding value prop
    const diceElements = num.map((x)=>{
        return <Dice value={x.value} key={x.id} isHeld={x.isHeld} holdDice={()=> holdDice(x.id)}/>
    })


    return (
    <div className="app">
        <main className="main-el">
            <h1>Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls</p>
        <div className="dice-wrap">
             {diceElements}
        </div>
           <button className="roll-btn" onClick={newRoll}>Roll</button>
        </main>
    </div>    
    )
    }