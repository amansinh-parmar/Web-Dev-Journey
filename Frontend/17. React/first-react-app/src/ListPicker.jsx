export default function ListPicker({values}){
    const randIdx = Math.floor(Math.random() * values.length)
    const randValue = values[randIdx]
    return (
        <div>
            <p>The List of Values: {values}</p>
            <p>The Random Element of value is {randValue}</p>
        </div>
    )
}