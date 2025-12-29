const apiKey = "5e5c83f6fc79c3790fc452988113a5a2";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = 'block';
        document.querySelector(".weather").style.display = 'none';
    }
    else {
        var data = await response.json();


        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == 'Clouds') {
            weatherIcon.src = "images/cloudy.png";
        }
        else if (data.weather[0].main == 'Clear') {
            weatherIcon.src = "images/cloudy-day.png";
        }
        else if (data.weather[0].main == 'Rain') {
            weatherIcon.src = "images/rainy.png";
        }
        else if (data.weather[0].main == 'Drizzle') {
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main == 'Mist') {
            weatherIcon.src = "images/fog.png"
        }

        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = 'none';

    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();