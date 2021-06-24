export function dateBuilder(d) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const day = days[d.getDay()];
  const date = d.getDate();
  const month = months[d.getMonth()];
  const year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}

export function weatherImg(weather) {
  const bgImg = {
    rain: 'rain.jpeg',
    clear: 'clear.webp',
    clouds: 'clouds.jpeg',
    snow: 'snow.jpeg',
    default: 'bg.jpeg',
  };
  return `/images/${bgImg[weather.toLowerCase()] || bgImg.default}`;
}
