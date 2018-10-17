// This file contaisn the function required for the locations list
// to properly work.

export const toggleDetails = (place) => {
    let childList = place.getElementsByTagName('li');
    for (let i = 0; i< childList.length; ++i)
    {
        let currentState = childList[i].style.display;
        if (currentState === "none"){
            childList[i].style.display="block";
        }
        else {
            childList[i].style.display="none";
        }
    }
}

export const getWeatherData = (location) => {
    const lat = location.lat;
    const long = location.lng;
    const url = `${process.env.REACT_APP_WEATHER_URL}?lat=${lat}&lon=${long}&units=imperial&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    return fetch(url).then((response) => {
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
