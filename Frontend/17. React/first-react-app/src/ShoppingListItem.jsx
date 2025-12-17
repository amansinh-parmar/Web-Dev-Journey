import PropTypes from "prop-types";

function ShoppingListItem({item, quantity, completed}){
    const style={
        color: completed ? "grey" : "skyblue",
        textDecoration: completed ? "line-through" : "none",
    }  
    return (
        <li style={style}
        >
            {item} - {quantity}
        </li>
    )
}

ShoppingListItem.propTypes ={
    item:PropTypes.string,
    quantity:PropTypes.number,
    completed:PropTypes.bool
}

export default ShoppingListItem;


//  <ul>
//       {items.map((i, index) => (
//         <li
//           key={i.id ?? index}
//           style={{
//             color: i.completed ? "grey" : "red",
//             textDecoration: i.completed ? "line-through" : "none",
//           }}
//         >
//           {i.items} - {i.quantity}
//         </li>
//       ))}
//     </ul>