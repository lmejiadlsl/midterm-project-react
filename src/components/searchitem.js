// SearchItem.js
import React, { useState } from 'react';

const SearchItem = ({ inventory }) => {
    const [searchID, setSearchID] = useState('');
    const [foundItem, setFoundItem] = useState(null);
    const [message, setMessage] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();

        const item = inventory.find((item) => item.id === searchID);

        if (item) {
            setFoundItem(item);
            setMessage('');
        } else {
            setFoundItem(null);
            setMessage('Item not found!');
        }
        setSearchID('');
    };

    return (
        <div>
            <h2>Search Item by ID</h2>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchID}
                    placeholder="Enter item ID"
                    onChange={(e) => setSearchID(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {message && <p>{message}</p>}

            {foundItem && (
                <div className="item-details">
                    <h3>Item Details</h3>
                    <p><strong>ID:</strong> {foundItem.id}</p>
                    <p><strong>Name:</strong> {foundItem.name}</p>
                    <p><strong>Quantity:</strong> {foundItem.quantity}</p>
                    <p><strong>Price:</strong> ${foundItem.price.toFixed(2)}</p>
                    <p><strong>Category:</strong> {foundItem.category}</p>
                </div>
            )}
        </div>
    );
};

export default SearchItem;
