import { useState } from "react";
import {v4 as uuid} from "uuid"
import ShoppingListForm from "./ShoppingListForm"
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";



function ShoppingList(){
    const [items, setItem] = useState([
        {id : uuid(), product: "Bananas", quantity: 4},
        {id : uuid(), product: "Apple", quantity: 8},
    ])

    const addItem = (item) => {
        setItem((currItem) => {
            return [...currItem, {...item, id: uuid()}]
        }) 
    }

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {items.map((i) => (
                    <li key = {i}>
                    {i.product} - {i.quantity}
                    </li>
                ))}
            </ul>
            {/* <ShoppingListForm addItem = {addItem}/> */}
            <ValidatedShoppingListForm addItem = {addItem}/>
        </div>
    )
}

export default ShoppingList;