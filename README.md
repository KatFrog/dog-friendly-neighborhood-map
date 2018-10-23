# East Cobb Dog-Friendly Neighborhood Maps  
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg) ![Google Maps](https://img.shields.io/badge/googlemaps-v3.34-brightgreen.svg?colorB=purple)![node (tag)](https://img.shields.io/node/v/passport/latest.svg) ![GitHub repo size in bytes](https://img.shields.io/github/repo-size/badges/shields.svg)

This is my final project to complete my Front End Nanodegree from Udacity.  The
requirements of this project are to develop a single page application featuring
a map of your neighborhood and to add functionality to this map including:
- highlighted locations using map markers,
- third-party data about those locations and,
- various ways to browse the content using filtering.

To this end, I created a neighborhood map highlighting locations that are
friendly to dogs.  I use [OpenWeatherMap](https://openweathermap.org) to display
the current weather at each location, because most of the time I'm going
outside with my dog.  For fun, I use custom map markers that are colored according to the
Dog Friendly Rating (DFR) of each location.  The DFR is a combination of:
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

Side note:  While I do the majority of state management with Redux, I used
local state management with React in situations where I needed to keep
track of information that pertains to the view of the single component.
