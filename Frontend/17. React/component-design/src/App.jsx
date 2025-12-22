// import Die from './Die'
// import Dice from './Dice'
import './App.css'
import LuckyN from './LuckyN'
import {sum} from './utils'
import BoxGrid from './BoxGrid'

function App() {

  function lessThan4(dice){
    return sum(dice) < 4
  }

  function allSameValue(dice){
    return dice.every((v) => v === dice[0])
  }


  return (
    <>
     {/* <Die val={4}/>
     <Die val={2}/>
     <Die val={0}/> */}
{/* 
     <Dice dice={[9,5,1,0,5,1,5,2]}/>
     <Dice dice={[9,9,0,9,0,0,9,9]} color={"seagreen"}/>
     <Dice dice={[8,4,6,0,3,5,8,8]} color={"red"}/> */}

      <BoxGrid/>

      {/* <LuckyN/> */}
      <LuckyN winCheck = {lessThan4} title = 'Roll less than 4'/>
      <LuckyN winCheck = {allSameValue} numDice = {2} title = 'Roll the same number'/>
      </>
    )
  }

  export default App
