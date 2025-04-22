// apiService.js
const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;

// Function to fetch application data from the API
async function fetchApplicationData() {
    try {
        const response = await axios.get(apiUrl);
        const applicationData = response.data;
        console.log('API Response:', applicationData);

        if (!applicationData || Object.keys(applicationData).length === 0) {
            throw new Error('No data received from the API or Invalid Data.');
        }
        return applicationData;
    } catch (error) {
        console.error('API Fetch Error:', error.message);
        throw new Error(`Failed to fetch application data: ${error.message}`);
    }
}

module.exports = {
    fetchApplicationData,
};