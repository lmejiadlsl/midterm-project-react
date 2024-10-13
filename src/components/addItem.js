import { useState } from 'react';

const AddItem = ({ onAddItem }) => {
    // State to store input values
    const [itemID, setItemID] = useState('');
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemPrice, setItemPrice] = useState('');
    const [itemCategory, setItemCategory] = useState('');
    const [message, setMessage] = useState('');
    
    // State to toggle form visibility
    const [isFormVisible, setIsFormVisible] = useState(false);

    // Function to handle adding an item
    const handleAddItem = (e) => {
        e.preventDefault();

        // Validate inputs
        if (!itemID || !itemName || itemQuantity <= 0 || itemPrice <= 0 || !itemCategory) {
            setMessage('Please fill out all fields correctly.');
            return;
        }

        const newItem = {
            id: itemID,
            name: itemName,
            quantity: parseInt(itemQuantity),
            price: parseFloat(itemPrice),
            category: itemCategory
        };

        onAddItem(newItem);

        setMessage('Item added successfully!');

        setItemID('');
        setItemName('');
        setItemQuantity('');
        setItemPrice('');
        setItemCategory('');
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <button onClick={toggleFormVisibility}>
                {isFormVisible ? 'Hide Add Item Form' : 'Add Item Form'}
            </button>

            {isFormVisible && (
                <div>
                    <form onSubmit={handleAddItem}>
                        <div>
                            <label>ID:</label>
                            <input
                                type="text"
                                value={itemID}
                                onChange={(e) => setItemID(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                value={itemName}
                                onChange={(e) => setItemName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Quantity:</label>
                            <input
                                type="number"
                                value={itemQuantity}
                                onChange={(e) => setItemQuantity(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Price:</label>
                            <input
                                type="number"
                                value={itemPrice}
                                onChange={(e) => setItemPrice(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Category:</label>
                            <select
                                value={itemCategory}
                                onChange={(e) => setItemCategory(e.target.value)}
                            >
                                <option value="">Select Category</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>
                        <button type="submit">Add Item</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            )}
        </div>
    );
};

export default AddItem;
