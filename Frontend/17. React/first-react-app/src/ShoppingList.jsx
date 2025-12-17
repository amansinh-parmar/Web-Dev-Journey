import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ item }) {
  return (
    <ul>
      {item.map((i, index) => (
        <ShoppingListItem 
        key={i.id ?? index}
        item={i.item} 
        quantity={i.quantity} 
        completed={i.completed}
        />

        // USE "SPEAD OPERATOR"
        // <ShoppingListItem key={i.id ?? index} {...i}/>
      ))}
    </ul>
  );
}

export default ShoppingList;
