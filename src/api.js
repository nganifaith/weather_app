const api = {
  key: 'cd4f656b0af345f1ee7717e98a413c67',
  baseurl: 'https://api.openweathermap.org/data/2.5/',
};

export default async function getResults(query, unit = 'metric') {
  try {
    const weather = await fetch(
      `${api.baseurl}weather?q=${query}&units=${unit}&APPID=${api.key}`
    );
    const body = await weather.json();
    if (weather.status !== 200) {
      throw body;
    } else {
      return body;
    }
  } catch (e) {
    return Promise.reject(e.message);
  }
}
