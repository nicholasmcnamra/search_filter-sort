import React, { useEffect, useState } from 'react';
import './App.css';

const fruits: string[] = [
  "Apple",
  "Banana",
  "Pear",
  "Mango",
  "Strawberry",
  "Blueberry",
  "Raspberry",
  "Mulberry",
  "Pineapple",
  "Honeydew"
];

function App() {
  const [fruitList, setFruitList] = useState(fruits);
  const [search, setSearch] = useState('');
  const [isSorted, setIsSorted] = useState(false);
 
  const handleSearchInput = (e: any) => {
    setSearch(e.target.value);
  }

  let filteredFruit = fruitList.filter((fruit) => fruit.toLowerCase().includes(search.toLowerCase()));

  const handleSortToggle = (e: any) => {
    const sortedFruitList = [...fruitList].sort();
    setIsSorted(e.target.checked);
    setFruitList(e.target.checked ? sortedFruitList : fruits);
  };


  return (
    <div className="App">
      <input type="text" className="search-input" onChange={handleSearchInput} />
      <input type="checkbox" checked={isSorted} onChange={handleSortToggle}/>
      <label>Sort Alpha</label>
      {filteredFruit.map((fruit, index) => (
        <div className="fruit-item" key={index}>
        {fruit}
        </div>
      ))}
    </div>
  );
}

export default App;
