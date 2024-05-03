
function searchCity(city) {
    let apiKey = "2e99ddt6a7e37f7c164ob09d070ab380";
    let apiUrl = "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial";
console.log(apiUrl);


}



function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
   let cityElement = document.querySelector("#main-city");

   cityElement.innerHTML = searchInput.value;
   searchCity(searchInput.value);
}



let searchBarElement = document.querySelector("#search-bar");
    searchBarElement.addEventListener("submit", handleSearchSubmit);
    