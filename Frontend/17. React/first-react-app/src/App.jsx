// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//         {/* FOR MOTIVATION FILE  */}
// import SelfMotivation from './SelfMotivation'
// import './SelfMotivation.css'

//         {/* FOR GREETER FILE  */}
// import Greeter from './Greeter'

// import RandomPokemon from './RandomPokemon'

//         {/* FOR DICE ROLL FILE  */}
// import Dice from './Dice'

//         {/* FOR LISTPICKER FILE  */}
// import ListPicker from './ListPicker'

//         {/* FOR DOUBLEDICE FILE  */}
// import DoubleDice from './DoubleDice'

//         {/* FOR HEADI FILE  */}
// import Heading from './Heading'

//         {/* FOR COLORLIST FILE  */}
// import ColorList from './ColorList'

//         {/* FOR ShoppingList FILE  */}
// import ShoppingList from './ShoppingList'



// // ======================= CODE FOR APP.JSX =======================


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//         <ShoppingList items={data}/>

//         {/* <SelfMotivation/>    */}

//         {/* FOR PROPS  */}
//         {/* GREETER FILE */}
//         {/* "Props" is to send the Value for 'Greeter.jsx' file */}
//         {/* <Greeter person="Apex" from="Julia"/> */}
//         {/* Set A Default Prop Value If Its Missing*/}
//         {/* <Greeter person="Apex"/> */}
//         {/* <Greeter person="Amanada" from="Amax"/> */}
//         {/* <Greeter from="Amax"/> */}

//         {/* DICE ROLL FILE */}
//         {/* <Dice numSide={20}/>
//         <Dice numSide={6}/>
//         <Dice numSide={10}/> */}

//       <Heading color="magenta" text="Welcome!" fontSize="20px" />
//       <Heading color="teal" text="Welcome!" fontSize="48px"/>



//       <ColorList colors= {["Red", 'Skyblue', 'Plum', 'Yellow']} />

//       <DoubleDice/> 
//       <DoubleDice/> 



//         {/* LISTPICKER FILE */}
//           {/* <ListPicker values={[1,2,3,4]}/> */}
//           {/* STRING EXAMPLE */}
//           {/* <ListPicker values={['A','B','C','D','E','F']}/>   */}

//       <div>
//         {/* <RandomPokemon/> */}
//       </div>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//       </div>

//     </>
// )
// }

// export default App


//  ======================= CODE FOR NEW APP.JSX =======================

//         {/* FOR SLOTS FILE  */}
// import Slots from "./Slots"
import "./App.css"

//         {/* FOR ShoppingList FILE  */}
// import ShoppingList from './ShoppingList'
// import ShoppingListItem from "./ShoppingListItem"

//         {/* FOR PropertyList FILE  */}
import PropertyList from "./PropertyList"

//         {/* FOR Clicker FILE  */}
import Clicker from "./Clicker"

//         {/* FOR Form FILE*/}
import Form from "./Form"

//         {/* FOR Counter FILE*/}
import Counter from "./Counter"
import Toggler from "./Toggler"
import TogglerCounter from "./ToggleCounter"


//         {/* FOR COLORBOX EXERCISE FILE*/}
import ColorBox from "./ColorBox"
import ColorBoxGrid from "./ColorBoxGrid"

//  ======================= CODE FOR SHOPPING LIST =======================
// const data = [
//         {item:"Bread", quantity:2, completed:false},
//         {item:"Milk", quantity:1, completed:true},
//         {item:"Tomato", quantity:9, completed:false},
//         {item:"Oats Powder", quantity:4, completed:true},
// ]


//  ======================= CODE FOR PROPERTY LIST EXERSICE =======================
const properties = [
        {id:129042, name:"Gold Miner Campground", rating: 4.7, price:170},
        {id:129240, name:"Redwood Treehouse Escape", rating: 4.2, price:150},
        {id:129245, name:"Oceanview Condo", rating: 4.5, price:250},
        {id:129144, name:"Lone Mountain Cabin", rating: 4.4, price:220},
        {id:129149, name:"Cactus Retreat", rating: 4.1, price:190},
]


//  ======================= CODE FOR COLOR BOX EXERSICE =======================
const colors = [
        "#E53925",
        "#E91E63",
        "#9C27B0",
        "#67BAB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722"
]

function App(){
  return (

        // <ShoppingList item={data}/>

        // ============================== //
        // <div>
        //         {/* <PropertyList properties={properties} /> */}
        //         {/* <Clicker /> */}
        //         {/* <Clicker message="Hii!!" buttonText="Please Click Me" /> */}
        //         {/* <Clicker message="YES YOU ARE RIGHT" buttonText="This WORKS"/> */}
        //         {/* <Clicker message="Please Stop Clicking Me!!" buttonText="Do NOT Click" /> */}
        //         {/* <Form /> */}

        //         {/* <Counter/> */}
        //         {/* <Toggler/> */}
        //         {/* <TogglerCounter/> */}
        // {/* // </div> */}
        // ============================== //

        <div>
                {/* <ColorBox colors={colors}/> */}
                {/* <ColorBoxGrid colors={colors}/> */}
                <ColorBoxGrid colors={colors} />
        </div>


        // ============================== //

//     <div>  
//     <Slots val1 = "🧠" val2="🧠" val3="🧠"/>
//     <Slots val1 = "🧠" val2="🔥" val3="🧠"/>
//     </div>
  )
}



export default App