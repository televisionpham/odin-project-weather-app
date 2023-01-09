import { getCityWeather } from "../api/weather";
import Weather from "./Weather";

const LocationForm = () => {
    const form = document.createElement('form')
    form.method = 'post'
    form.innerHTML = `<div class="form-control">
    <label for="city">City</label>
    <input id="city" name="city" type="text">
</div>
<button type="submit">Submit</button>`

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const city = document.getElementById('city').value;
        const data = await getCityWeather(city)
        const result = document.getElementById('result');
        result.innerHTML = "";
        result.appendChild(Weather(data));
    });

    return form;
}

export default LocationForm;