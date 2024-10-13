import React, { useState, useEffect } from 'react';

function DisplayItemsByCategory({ inventory }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [showCategoryForm, setShowCategoryForm] = useState(false);

    const categories = ['Clothing', 'Electronics', 'Entertainment'];

    const filteredItems = inventory.filter((item) => item.category === selectedCategory);

    useEffect(() => {
        console.log('Filtered Items:', filteredItems);
    }, [filteredItems]);

    return (
        <div className="display-category-container">
            <button onClick={() => setShowCategoryForm((prev) => !prev)}>
                {showCategoryForm ? 'Hide Category Form' : 'Display Items by Category'}
            </button>

            {showCategoryForm && (
                <div className="category-form">
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="">Select a Category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {selectedCategory && (
                <div className="item-table">
                    <h3>Items in {selectedCategory}</h3>
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
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>${item.price}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4">No items found in this category.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default DisplayItemsByCategory;
