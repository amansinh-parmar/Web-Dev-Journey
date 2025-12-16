export default function Dice({numSide}){
    const RandomNum = Math.floor((Math.random() * numSide) + 1)
    return (
        <h4>{numSide} - Sided Dice Roll:{RandomNum}</h4>
    )
}
// To Set Default Prop Value 
// export default function Dice({numSide = 9}){
//     const RandomNum = Math.floor((Math.random() * numSide) + 1)
//     return (
//         <h4>{numSide} - Sided Dice Roll:{RandomNum}</h4>
//     )
// }