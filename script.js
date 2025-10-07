const key = "47110a9cf5ba09b713214560d45d6ac0";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".searchbar input");
const btn = document.querySelector(".btn");
const weatherIcon = document.querySelector(".weatherImg img");

async function checkWeather(searchBox) {
    const response = await fetch(ApiUrl + searchBox + `&appid=${key}`);
    if (response.status == 404 || searchBox == "") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        var data = await response.json();
        console.log(data);
        document.querySelector(".cityName").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed").innerHTML = data.wind.speed + "Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "../Weather-project/assets/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "../Weather-project/assets/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "../Weather-project/assets/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "../Weather-project/assets/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "../Weather-project/assets/mist.png";
        }
    }
}
btn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
