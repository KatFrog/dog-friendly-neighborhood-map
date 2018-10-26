// This file contains the functions required for the locations list
// to properly work.

export const toggleDetails = (place) => {
    let childList = place.getElementsByClassName('details');
    for (let i = 0; i< childList.length; ++i)
    {
        if (childList[i].classList.contains('hidden')){
            childList[i].classList.remove('hidden');
        }
        else {
            childList[i].classList.add('hidden');
        }
    }
}

export const getWeatherData = (location) => {
    const LAT = location.lat;
    const LONG = location.lng;
    const URL = `${process.env.REACT_APP_WEATHER_URL}?lat=${LAT}&lon=${LONG}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    return fetch(URL).then((response) => {
            return response.json();
        }).then ((data) => {
            let currentWeather = {
                temp: data.main.temp,
                humidity: data.main.humidity,
                icon: data.weather[0].icon,
            };
            return currentWeather;
        });
}
