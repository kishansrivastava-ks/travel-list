import { useState } from "react";

export default function Form({ onAddItems }) {
  // Step 1 of controlled elements => creating an input state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]);
  // we'll lift this state to the closest parent component (App) so that it can be used by the PAckingList component which is its sibling

  function handleSubmit(e) {
    e.preventDefault();

    // do nothing if description is missing
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    onAddItems(newItem);

    // set form to initial state after submission
    // update the state to re-render the entire component
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 🙂</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        // e is the target that is the input element
        // 🔴 onChange => whenever we change the value of the input field, the description is set to the changed value (new state of the description)
      ></input>
      <button>Add</button>
    </form>
  );
}
