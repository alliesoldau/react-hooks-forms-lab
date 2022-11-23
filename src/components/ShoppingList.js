import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      if (selectedCategory === "All") {
        return true;
      } else if (item.category === selectedCategory) {
        return true;
      }
    }
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
        search={search}
        onSearchChange={setSearch}
        onCategoryChange={handleCategoryChange} 
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} 
            name={item.name} 
            category={item.category} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
