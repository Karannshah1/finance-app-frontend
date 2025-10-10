// Import the axios library for making HTTP requests.
import axios from 'axios';
// Netlify will automatically install dependencies listed in your package.json.
const axios = require('axios');

/**
 * This is the serverless function that will be executed by Netlify on a schedule.
 * Its only job is to send a GET request to your backend's health check endpoint.
 */
exports.handler = async function(event, context) {
    // Construct the full URL to your backend's health endpoint.
    // process.env.REACT_APP_API_URL is injected by Netlify from your site's environment variables.
    const url = process.env.REACT_APP_API_URL + "/sender";

    try {
        // Make the GET request.
        const response = await axios.get(url);
        
        // Log the success message to the function logs in your Netlify dashboard.
        console.log(`Ping successful at ${new Date().toISOString()}: Status ${response.status}`);
        
        // Return a success response.
        return {
            statusCode: 200,
            body: `Successfully pinged ${url}.`
        };
    } catch (error) {
        // Log the error message to the function logs.
        console.error(`Error pinging backend at ${new Date().toISOString()}:`, error.message);
        
        // Return an error response.
        return {
            statusCode: 500,
            body: `Failed to ping ${url}. Error: ${error.message}`
        };
    }
};

