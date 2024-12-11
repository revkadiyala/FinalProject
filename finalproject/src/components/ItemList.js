import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearItems } from '../store';

const ItemList = () => {
  const [newItem, setNewItem] = useState('');
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (newItem.trim()) {
      dispatch(addItem(newItem));
      setNewItem('');
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
      <button onClick={() => dispatch(clearItems())}>Clear Items</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => dispatch(removeItem(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
