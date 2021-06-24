const searchBox = document.querySelector('.search-box');
const city = document.querySelector('.location .city');
const date = document.querySelector('.location .date');
const temp = document.querySelector('.current .temp');
const weather_el = document.querySelector('.current .weather');
const hiLow = document.querySelector('.hi-low');

const now = new Date();

searchBox.addEventListener('keypress', setQuery);
