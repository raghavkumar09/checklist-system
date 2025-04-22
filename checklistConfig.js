// checklistConfig.js
module.exports = [
    {
        name: 'Valuation Fee Paid',
        field: 'isValuationFeePaid',
        check: (value) => value === true,
    },
    {
        name: 'UK Resident',
        field: 'isUkResident',
        check: (value) => value === true,
    },
    {
        name: 'Risk Rating Medium',
        field: 'riskRating',
        check: (value) => value === 'Medium',
    },
    {
        name: 'LTV Below 60%',
        fields: ['loanRequired', 'purchasePrice'],
        check: (values) => {
            if (values.loanRequired === 0 || values.purchasePrice === 0) return false;
            const ltv = (values.loanRequired / values.purchasePrice) * 100;
            return ltv < 60;
        },
    },
];