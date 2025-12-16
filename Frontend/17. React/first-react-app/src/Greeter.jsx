// "Props" is to send the arrgument
// export default function Greeter(props){
//     // Send the Value for user output
//     return <h1>Hello, {props.person} <br /> Welcome to ReactJS Developer</h1>
// }


// NON-STRING PROPS
export default function Greeter({person, from}){
    // Send the Value for user output
    return( 
        <>
    <h1>Hello, There {person}!!</h1>
    <h2>- {from}</h2>
    </>
    )
}

// Set A Default Prop Value If Its Missing
// export default function Greeter({person='Everyone', from='Anonymous'}){
//     // Send the Value for user output
//     return( 
//         <>
//     <h1>Hello, There {person}!!</h1>
//     <h2>- {from}</h2>
//     </>
//     )
// }