
function refreshWeather(response) {
    let temperatureElement = document.querySelector("#main-temp");
    let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#main-city");

   cityElement.innerHTML = response.data.city;

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