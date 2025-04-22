const checklistConfig = require('./checklistConfig');

// get value from data object
function getValuesForCheck(data, fields) {
    if (typeof fields === 'string') {
        return data[fields];
    } else if (Array.isArray(fields)) {
        return fields.reduce((acc, field) => {
            acc[field] = data[field];
            return acc;
        }, {});
    }
    return null;
}

// Function to evaluate a single rule
function evaluateRule(rule, data) {
    const value = getValuesForCheck(data, rule.fields || rule.field);
    if (value === null) {
        console.warn(
            `Warning: Field(s) "${
                rule.fields || rule.field
            }" not found in data for rule "${rule.name}".`
        );
        return { name: rule.name, status: 'Data Missing' };
    }
    const passed = rule.check(value);
    return {
        name: rule.name,
        status: passed ? 'Passed' : 'Failed',
    };
}

// Function to evaluate all checklst rules
function evaluateChecklist(data) {
    return checklistConfig.map((rule) => evaluateRule(rule, data));
}

module.exports = {
    evaluateChecklist,
};