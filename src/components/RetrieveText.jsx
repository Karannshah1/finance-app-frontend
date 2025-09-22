import React, { useState } from 'react';
import axios from 'axios';

// IMPORTANT: Replace this with your deployed backend URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8091/api/sender';

const RetrieveText = () => {
    const [number, setNumber] = useState('');
    const [retrievedText, setRetrievedText] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleRetrieve = async (e) => {
        e.preventDefault();
        const num = parseInt(number, 10);
        if (isNaN(num) || num < 1 || num > 9999) {
            setError('Please enter a valid number between 1 and 9999.');
            return;
        }

        setLoading(true);
        setError('');
        setRetrievedText(null);

        try {
            const response = await axios.get(`${API_URL}/text/${num}`);
            setRetrievedText(response.data);
        } catch (err) {
            if (err.response && err.response.status === 404) {
                setError(`No text found for number: ${num}`);
            } else {
                setError('Failed to retrieve text. Please try again later.');
            }
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card">
            <h2>Retrieve Text by Number</h2>
            <form onSubmit={handleRetrieve}>
                <input
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter your number (1-9999)"
                    min="1"
                    max="9999"
                    className="input"
                />
                <button type="submit" disabled={loading} className="button">
                    {loading ? 'Retrieving...' : 'Retrieve Text'}
                </button>
            </form>
            {retrievedText !== null && (
                 <div className="result-display">
                    <h3>Retrieved Content:</h3>
                    <pre className="retrieved-text">{retrievedText}</pre>
                </div>
            )}
            {error && <p className="result error">{error}</p>}
        </div>
    );
};

export default RetrieveText;
