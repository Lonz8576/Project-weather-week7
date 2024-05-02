
function handleSearchSubmit(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
   let cityElement = document.querySelector("#main-city");
   cityElement.innerHTML = searchInput.value;
}



let searchBarElement = document.querySelector("#search-bar");
    searchBarElement.addEventListener("submit", handleSearchSubmit);
    