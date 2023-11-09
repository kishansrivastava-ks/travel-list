export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        onClick={
          () => {
            onDeleteItem(item.id);
          }
          // here directly using the onDeleteItem would not delete the item, because react would pass the event object into the onDeleteItem function and the function instead uses the id as an argument to delete the item, so we use a callback function
        }
      >
        ❌
      </button>
    </li>
  );
}
