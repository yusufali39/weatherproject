    // // Access the response data and update the DOM elements
    // const nameElement = document.getElementById('name');
    // const weatherDescriptionElement = document.getElementById('weatherDescription');
    // const cityElement = document.getElementById('city');
    // const temperatureElement = document.getElementById('temperature');
    // const weatherIconElement = document.getElementById('weatherIcon');
    
    // const name = "{{name}}";
    // const weatherDescription = "{{weatherDescription}}";
    // const city = "{{city}}";
    // const temperature = "{{temperature}}";
    // const weatherIconURL = "{{weatherIconURL}}";
    
    // nameElement.textContent = name;
    // weatherDescriptionElement.textContent = weatherDescription;
    // cityElement.textContent = city;
    // temperatureElement.textContent = temperature;
    // weatherIconElement.src = weatherIconURL;

    // Access the response data and update the DOM elements
const nameElement = document.getElementById('name');
const weatherDescriptionElement = document.getElementById('weatherDescription');
const cityElement = document.getElementById('city');
const temperatureElement = document.getElementById('temperature');
const weatherIconElement = document.getElementById('weatherIcon');

const appIndexHTML = `{{appIndexHTML}}`;

const parser = new DOMParser();
const doc = parser.parseFromString(appIndexHTML, 'text/html');

nameElement.textContent = doc.getElementById('name').textContent;
weatherDescriptionElement.textContent = doc.getElementById('weatherDescription').textContent;
cityElement.textContent = doc.getElementById('city').textContent;
temperatureElement.textContent = doc.getElementById('temperature').textContent;
weatherIconElement.src = doc.getElementById('weatherIcon').src;
