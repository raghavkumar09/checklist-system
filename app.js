// app.js
const express = require('express');
const { fetchApplicationData } = require('./apiService');
const { evaluateChecklist } = require('./checklistService');
const { generateDashboardHtml } = require('./dashboardService');

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        const applicationData = await fetchApplicationData();
        const results = evaluateChecklist(applicationData);
        console.log('Checklist Results:', results);

        const dashboardData = {
            results: results,
            rawData: applicationData,
        };

        const dashboardHtml = generateDashboardHtml(dashboardData);
        res.send(dashboardHtml);
    } catch (error) {
        console.error('Application Error:', error.message);
        res.status(500).send(`Error: ${error.message}`);
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});