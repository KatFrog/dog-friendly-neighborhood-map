# East Cobb Dog-Friendly Neighborhood Map
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
 ![Google Maps](https://img.shields.io/badge/googlemaps-v3.34-brightgreen.svg?colorB=purple) ![OpenWeatherMap](https://img.shields.io/badge/openweathermap-v2.5-brightgreen.svg) ![React](https://img.shields.io/badge/react-v16.5.2-ff69b4.svg) ![Redux](https://img.shields.io/badge/redux-v4.0.0-a151cc.svg)

The East Cobb Dog-Friendly Neighborhood Map features locations in and around
East Cobb County, GA that are friendly to dogs.  The app uses
[OpenWeatherMap](https://openweathermap.org) to display the current weather
at each location. This app also provides custom map markers that are colored
according to the **Dog Friendly Rating (DFR)** of each location.  The **DFR** is
a combination of:
- where dogs are allowed (inside and outside, or outside only),
- whether water is provided,
- what activities are available, and
- the friendliness of the staff (if any) towards dogs.

## Technical Details
This app was created using:
- [React](https://reactjs.org): to control the view (rendering)
- [react-select](https://react-select.com): to provide the widget for filtering locations
- [prop-types](https://www.npmjs.com/package/prop-types): for type checking props being passed to a component
- [react-async-script-loader](https://github.com/leozdgao/react-async-script-loader): to load the JavaScript Google Maps API
- [Redux](https://redux.js.org): to manage the state (data) inside the app

## Installation
### Prerequisites
Before installing this application, you need:
- an API key from Google Maps,
- an API key from OpenWeatherMap,
- npm version 6.4.1 or higher, and
- an environment variable file.

You need to create your own environment variable file:
1. Create a file called ".env"
2.  Add the following lines of code to the file:

    REACT_APP_WEATHER_API_KEY={Insert Your API Key Here}
    REACT_APP_WEATHER_URL=https://api.openweathermap.org/data/2.5/weather
    REACT_APP_GOOGLE_MAPS_API_KEY={Insert Your API Key Here}
    REACT_APP_GOOGLE_MAPS_URL=https://maps.googleapis.com/maps/api/js?&v=3&key=
3. Add your Google Maps and OpenWeatherMap API keys in the appropriate variables.

### Instructions

1. Download or clone the repository.
2. Change directories to the application directory.
3. Move the .env file here.
4. Run the command "npm install".
5. Run the command "npm start".

That's it!  Now you can find lots of dog-friendly locations here in East Cobb.
