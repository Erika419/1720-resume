import { getCurrentWeather } from "../modules/weather.mjs";

//buttons
document.querySelector("#park1").addEventListener('click', () => {
getCurrentWeather(40.53335354402215, -111.49016984994542)
})

document.querySelector("#park2").addEventListener('click', () => {
getCurrentWeather(25.933488066055048, -80.55458631319833)
})

document.querySelector("#park3").addEventListener('click', () => {
getCurrentWeather(37.601693617079135, -112.18533500916251)
})

document.querySelector("#park4").addEventListener('click', () => {
getCurrentWeather(37.6406336069576, -118.96579766704055)
})



