import React, { useState } from 'react';

const SortItems = ({ inventory }) => {
    const [sortField, setSortField] = useState('Quantity');
    const [sortOrder, setSortOrder] = useState('Ascending');
    const [sortedItems, setSortedItems] = useState([]);

    const handleSort = () => {
        // Create a copy of the inventory array to avoid mutating the original
        const sorted = [...inventory].sort((a, b) => {
            if (sortField === 'Quantity') {
                return sortOrder === 'Ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
            } else {
                return sortOrder === 'Ascending' ? a.price - b.price : b.price - a.price;
            }
        });

        setSortedItems(sorted);
    };

    return (
        <div>
            <h2>Sort Items</h2>
            <div>
                <label>Sort By:</label>
                <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
                    <option value="Quantity">Quantity</option>
                    <option value="Price">Price</option>
                </select>
            </div>
            <div>
                <label>Order:</label>
                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Descending</option>
                </select>
            </div>
            <button onClick={handleSort}>Sort</button>

            {sortedItems.length > 0 && (
                <div className="item-table">
                    <h3>Sorted Items</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default SortItems;
