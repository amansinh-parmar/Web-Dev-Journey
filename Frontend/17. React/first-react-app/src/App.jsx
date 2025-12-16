import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

        {/* FOR MOTIVATION FILE  */}
import SelfMotivation from './SelfMotivation'
import './SelfMotivation.css'

        {/* FOR GREETER FILE  */}
import Greeter from './Greeter'

import RandomPokemon from './RandomPokemon'

        {/* FOR DICE ROLL FILE  */}
import Dice from './Dice'

        {/* FOR LISTPICKER FILE  */}
import ListPicker from './ListPicker'

        {/* FOR DOUBLEDICE FILE  */}
import DoubleDice from './DoubleDice'

        {/* FOR HEADI FILE  */}
import Heading from './Heading'

        {/* FOR COLORLIST FILE  */}
import ColorList from './ColorList'


// ======================= CODE FOR APP.JSX =======================


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        {/* <SelfMotivation/> */}

        {/* FOR PROPS  */}
        {/* GREETER FILE */}
        {/* "Props" is to send the Value for 'Greeter.jsx' file */}
        {/* <Greeter person="Apex" from="Julia"/> */}
        {/* Set A Default Prop Value If Its Missing*/}
        {/* <Greeter person="Apex"/> */}
        {/* <Greeter person="Amanada" from="Amax"/> */}
        {/* <Greeter from="Amax"/> */}

        {/* DICE ROLL FILE */}
        {/* <Dice numSide={20}/>
        <Dice numSide={6}/>
        <Dice numSide={10}/> */}

      <Heading color="magenta" text="Welcome!" fontSize="20px" />
      <Heading color="teal" text="Welcome!" fontSize="48px"/>



      <ColorList colors= {["Red", 'Skyblue', 'Plum', 'Yellow']} />

      <DoubleDice/> 
      <DoubleDice/> 



        {/* LISTPICKER FILE */}
          {/* <ListPicker values={[1,2,3,4]}/> */}
          {/* STRING EXAMPLE */}
          {/* <ListPicker values={['A','B','C','D','E','F']}/>   */}

      <div>
        {/* <RandomPokemon/> */}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

    </>
)
}

export default App


//         {/* FOR SLOTS FILE  */}
// import Slots from "./Slots"
// import "./App.css"

// function App(){
//   return (
//     <div>  
//     <Slots val1 = "🧠" val2="🧠" val3="🧠"/>
//     <Slots val1 = "🧠" val2="🔥" val3="🧠"/>
//     </div>
//   )
// }

// export default App