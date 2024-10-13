import React, { useState } from 'react';
import Header from './components/header';
import './App.css';
import AddItem from './components/addItem';
import UpdateItem from './components/updateItem';
import RemoveItem from './components/removeItem';
import DisplayItemsByCategory from './components/displayItemsByC';
import DisplayAllItems from './components/displayallitems';
import SearchItem from './components/searchitem';
import SortItems from './components/sortitem';
import DisplayLowStockItems from './components/displaylowstockitems';

function App() {
    const [inventory, setInventory] = useState([]);

    const handleAddItem = (newItem) => {
        setInventory((prevInventory) => [...prevInventory, newItem]);
        console.log('New item added:', newItem);
    };

    const handleUpdateItem = (updatedItem) => {
        const itemIndex = inventory.findIndex((item) => item.id === updatedItem.id);
        if (itemIndex === -1) {
            console.log('Item not found!');
            return { success: false }; 
        }

        if (updatedItem.value <= 0) {
            console.log('Value must be greater than zero.');
            return { success: false };
        }

        const updatedInventory = [...inventory];
        const item = { ...updatedInventory[itemIndex] };
        const oldValue = updatedItem.field === 'Quantity' ? item.quantity : item.price;

        if (updatedItem.field === 'Quantity') {
            item.quantity = updatedItem.value;
        } else {
            item.price = updatedItem.value;
        }

        updatedInventory[itemIndex] = item;

        console.log('Inventory before update:', inventory);
        setInventory(updatedInventory);
        console.log('Inventory after update:', updatedInventory); 

        console.log(`Updated ${item.name}'s ${updatedItem.field} from ${oldValue} to ${updatedItem.value}`);
        return { success: true, name: item.name, oldValue: oldValue }; 
    };

    const handleRemoveItem = (itemID) => {
        const updatedInventory = inventory.filter((item) => item.id !== itemID);
        setInventory(updatedInventory);
        return updatedInventory.length < inventory.length;
    };

    return (
        <div className="App">
            <Header />
            <SearchItem inventory={inventory} />
            <AddItem onAddItem={handleAddItem} />
            <UpdateItem onUpdateItem={handleUpdateItem} />
            <RemoveItem onRemoveItem={handleRemoveItem} />
            <DisplayItemsByCategory inventory={inventory} />
            <SortItems inventory={inventory} />
            <DisplayAllItems inventory={inventory} /> 
            <DisplayLowStockItems inventory={inventory} />
        </div>
    );
}

export default App;
