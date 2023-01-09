const apiUrl = 'https://api.openweathermap.org/data/2.5';
const apiKey = 'a89ef96a67e297628ee536d1ebb04694';

const getCityWeather = async (city) => {
    const url = `${apiUrl}/weather?q=${city}&APPID=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
}

export { getCityWeather }