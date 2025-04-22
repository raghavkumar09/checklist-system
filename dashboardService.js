
// Function to generate HTML for the dashboard
function generateDashboardHtml(dashboardData) {
    const dashboardStyles = `
        body { font-family: sans-serif; padding: 20px; }
        table { width: 100%; border-collapse: collapse; }
        th, td { text-align: left; padding: 8px; border-bottom: 1px solid #ddd; }
        th { background-color: #f0f0f0; }
        .passed { color: green; }
        .failed { color: red; }
        .data-missing { color: orange; }
        pre { background-color: #f4f4f4; border: 1px solid #ddd; padding: 10px; overflow-x: auto; }
    `;

    return `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Checklist Dashboard</title>
            <style>${dashboardStyles}</style>
        </head>
        <body>
            <h1>Checklist Results</h1>
            <table>
                <thead>
                    <tr>
                        <th>Rule</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${dashboardData.results
                        .map(
                            (result) => `
                        <tr>
                            <td>${result.name}</td>
                            <td class="${result.status
                                .toLowerCase()
                                }">${result.status}</td>
                        </tr>
                    `
                        )
                        .join('')}
                </tbody>
            </table>
    
            <h2>Raw Application Data</h2>
            <pre>${JSON.stringify(dashboardData.rawData, null, 2)}</pre>
        </body>
        </html>
    `;
}

module.exports = {
    generateDashboardHtml,
};