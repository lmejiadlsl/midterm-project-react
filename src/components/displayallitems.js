import React from 'react';

const DisplayAllItems = ({ inventory }) => {
    return (
        <div className="display-all-items">
            <h2>All Inventory Items</h2>
            {inventory.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No items in the inventory.</p>
            )}
        </div>
    );
};

export default DisplayAllItems;
