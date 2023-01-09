const { default: LocationForm } = require("./components/LocationForm");

const root = document.getElementById('root');
root.appendChild(LocationForm());

const result = document.createElement('div');
result.id = 'result';
root.appendChild(result)