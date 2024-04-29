import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, updateArray }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch]= useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function onSearchChange(event) {
   setSearch(event.target.value.toLowerCase());
  }
  function onItemFormSubmit(newItem) {
    updateArray(newItem)
  }

  const itemsToDisplay = items
  .filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  })
  .filter((item)=> {
    if (search === "") return true;
    if (item.name.toLowerCase().includes(search)) return true
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter setItemSearch= {setSearch} search= {search} onSearchChange ={onSearchChange} handleCatergoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
