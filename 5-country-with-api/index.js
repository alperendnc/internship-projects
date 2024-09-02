let allCountries = [];

function displayCountries(countries) {
  const countryContainer = document.getElementById("countryList");
  countryContainer.innerHTML = "";

  countries.forEach((country) => {
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");

    const countryName = document.createElement("h3");
    countryName.textContent = country.name.common;
    countryDiv.appendChild(countryName);

    const countryFlag = document.createElement("img");
    countryFlag.src = country.flags.svg;
    countryFlag.alt = `${country.name.common} bayrağı`;
    countryDiv.appendChild(countryFlag);

    const countryRegion = document.createElement("p");
    countryRegion.textContent = `Region: ${country.region}`;
    countryDiv.appendChild(countryRegion);

    const countryCapital = document.createElement("p");
    countryCapital.textContent = `Capital: ${
      country.capital ? country.capital[0] : "N/A"
    }`;
    countryDiv.appendChild(countryCapital);

    const countryPopulation = document.createElement("p");
    countryPopulation.textContent = `Population: ${country.population}`;
    countryDiv.appendChild(countryPopulation);

    countryContainer.appendChild(countryDiv);
  });
}
function filterCountries() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const selectedRegion = document.getElementById("region").value;
  const filteredCountries = allCountries.filter((country) => {
    const matchesName = country.name.common.toLowerCase().includes(searchValue);
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    return matchesName && matchesRegion;
  });
  displayCountries(filteredCountries);
}
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    allCountries = data;
    displayCountries(data);
  });
document
  .getElementById("searchButton")
  .addEventListener("click", filterCountries);
document.getElementById("region").addEventListener("change", filterCountries);
