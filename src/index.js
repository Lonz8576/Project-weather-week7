
function refreshWeather(response) {
    let temperatureElement = document.querySelector("#main-temp");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#main-city");
    let conditionElement = document.querySelector("#cond-img-des");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind-speed");
    let pressureElement = document.querySelector("#pressure");
    let feelsElement = document.querySelector("#feels-like");

    let iconElement = document.querySelector("#icon");
 
    iconElement.innerHTML = `<img src = "${response.data.condition.icon_url}"class="main-img" />`;


   
   cityElement.innerHTML = response.data.city;
   conditionElement.innerHTML = response.data.condition.icon;
   humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
   windElement.innerHTML = `${response.data.wind.speed}mph`;
   pressureElement.innerHTML = `${response.data.temperature.pressure}Hg`;
   feelsElement.innerHTML = `${response.data.temperature.feels_like} ° `;

    
    temperatureElement.innerHTML = Math.round(temperature);


}


function searchCity(city) {
    let apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(refreshWeather);


}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
  
   searchCity(searchInput.value);
}



let searchBarElement = document.querySelector("#search-bar");
    searchBarElement.addEventListener("submit", handleSearchSubmit);
    
    
    searchCity("San Fransisco");