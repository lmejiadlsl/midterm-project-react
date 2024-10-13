import { useState } from 'react';

const UpdateItem = ({ onUpdateItem }) => {
    // State to store input values
    const [itemID, setItemID] = useState('');
    const [updateField, setUpdateField] = useState('Quantity');
    const [newValue, setNewValue] = useState('');
    const [message, setMessage] = useState('');
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleUpdateItem = (e) => {
        e.preventDefault();

        if (!itemID || !newValue) {
            setMessage('Please fill out all fields correctly.');
            return;
        }

        const updatedItem = {
            id: itemID,
            field: updateField,
            value: updateField === 'Quantity' ? parseInt(newValue) : parseFloat(newValue)
        };

        const result = onUpdateItem(updatedItem);
        
        if (result.success) {
            setMessage(`Item ${result.name}'s ${updatedItem.field} updated from ${result.oldValue} to ${newValue}.`);
        } else {
            setMessage('Item not found!');
        }

        setItemID('');
        setNewValue('');
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <button onClick={toggleFormVisibility}>
                {isFormVisible ? 'Hide Update Form' : 'Show Update Form'}
            </button>

            {isFormVisible && (
                <div>
                    <form onSubmit={handleUpdateItem}>
                        <div>
                            <label>ID:</label>
                            <input
                                type="text"
                                value={itemID}
                                onChange={(e) => setItemID(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Update Field:</label>
                            <select
                                value={updateField}
                                onChange={(e) => setUpdateField(e.target.value)}
                            >
                                <option value="Quantity">Quantity</option>
                                <option value="Price">Price</option>
                            </select>
                        </div>
                        <div>
                            <label>New Value:</label>
                            <input
                                type="number"
                                value={newValue}
                                onChange={(e) => setNewValue(e.target.value)}
                            />
                        </div>
                        <button type="submit">Update Item</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            )}
        </div>
    );
};

export default UpdateItem;
