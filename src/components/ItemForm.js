import React,{useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

const [name,setName] = useState("")
const [category,setCategory] = useState('Produce')

function onNameChange(e) {
  setName(e.target.value)
}
function onCategoryChange(e) {
  setCategory(e.target.value)
}
function handleSubmit(e) {
  e.preventDefault()
  const newItem = {
    name: name,
    category: category,
    isInCart: false,
    id: name
  }
  onItemFormSubmit(newItem)
}
  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input onChange ={onNameChange} type="text" name="name" value={name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={onCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button  type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
