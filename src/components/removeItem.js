import { useState } from 'react';

const RemoveItem = ({ onRemoveItem }) => {

    const [itemID, setItemID] = useState('');
    const [message, setMessage] = useState('');
    
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleRemoveItem = (e) => {
        e.preventDefault();

        // Validate input
        if (!itemID) {
            setMessage('Please enter a valid ID.');
            return;
        }

        const isRemoved = onRemoveItem(itemID);

        if (isRemoved) {
            setMessage('Item removed successfully!');
        } else {
            setMessage('Item not found.');
        }

        setItemID('');
    };

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    return (
        <div>
            <button onClick={toggleFormVisibility}>
                {isFormVisible ? 'Hide Remove Item Form' : 'Remove Item Form'}
            </button>

            {isFormVisible && (
                <div>
                    <form onSubmit={handleRemoveItem}>
                        <div>
                            <label>ID:</label>
                            <input
                                type="text"
                                value={itemID}
                                onChange={(e) => setItemID(e.target.value)}
                            />
                        </div>
                        <button type="submit">Remove Item</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            )}
        </div>
    );
};

export default RemoveItem;
