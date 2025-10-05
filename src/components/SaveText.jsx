import React, { useState } from 'react';
import axios from 'axios';

// IMPORTANT: Replace this with your deployed backend URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8091/api/';

const SaveText = () => {
    const [text, setText] = useState('');
    const [assignedNumber, setAssignedNumber] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) {
            setError('Text content cannot be empty.');
            return;
        }

        setLoading(true);
        setError('');
        setAssignedNumber(null);

        try {
            const response = await axios.post(`${API_URL}/sender/text`, { text });
            setAssignedNumber(response.data.number);
            setText(''); // Clear the textarea after successful submission
        } catch (err) {
            setError('Failed to save text. Please try again later.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h2>Store New Text</h2>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter your text here. There is no size limit."
                    rows="8"
                    className="textarea"
                />
                <button type="submit" disabled={loading} className="button">
                    {loading ? 'Saving...' : 'Save Text'}
                </button>
            </form>
            {assignedNumber && (
                <div className="result success">
                    <p>Text saved successfully! Your number is:</p>
                    <strong className="number-display">{assignedNumber}</strong>
                </div>
            )}
            {error && <p className="result error">{error}</p>}
        </div>
    );
};

export default SaveText;
