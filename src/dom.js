import getResults from './api';
import { dateBuilder, weatherImg } from './app';

const searchBox = document.querySelector('.search-box');
const error = document.querySelector('.error');

let units = 'Metric';
let currentCity = '';

function displayResults(weather) {
  const city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  const date = document.querySelector('.location .date');
  const now = new Date();
  date.innerHTML = dateBuilder(now);

  const temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

  const weatherEl = document.querySelector('.current .weather');
  weatherEl.innerHTML = weather.weather[0].main;

  const hiLow = document.querySelector('.hi-low');
  hiLow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(
    weather.main.temp_max
  )}°c`;

  document.body.style.backgroundImage = `url(${weatherImg(
    weather.weather[0].main
  )}
  )`;
}

export default function search(city) {
  currentCity = city;
  error.classList.add('hidden');
  return getResults(city)
    .then(displayResults)
    .catch((message) => {
      error.classList.remove('hidden');
      error.innerText = message;
    });
}

function setQuery(event) {
  if (event.keyCode === 13) {
    search(searchBox.value);
  }
}

function changeUnit() {
  units = units === 'Metric' ? 'Imperial' : 'Metric';
  search(currentCity);
}
searchBox.addEventListener('keypress', setQuery);
