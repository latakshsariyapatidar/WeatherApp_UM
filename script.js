const searchButton = document.querySelector("#searchButton");
const serchInput = document.querySelector("#cityInput");

const key = "Your API KEY Here"; // Replace with your actual API key

searchButton.addEventListener("click", async () => {
  if (serchInput.value.trim() === "") {
    alert("Please enter a search term");
  } else {
    // Here you can add the code to perform the search
    // For example, you could call a function to fetch data from an API
    const link = `https://api.weatherapi.com/v1/current.json?key=dd524850c96f449686c70041252406&q=${serchInput.value.trim()}`;
    await fetch(link)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          alert("City not found. Please try again.");
        } else {
            // Assuming the API returns data in the expected format
          let cityName = data.location.name;
          let temperature = data.current.temp_c;
          let condition = data.current.condition.text;
          let iconUrl = data.current.condition.icon;

          let weatherInfo = `
            <div id="weatherResult" class="mt-6 text-center">
      <div class="flex justify-center items-center">
        <img id="weatherIcon" src="${iconUrl}" alt="Weather Icon" class="w-16 h-16 sm:w-24 sm:h-24" />
      </div>
      <h2 id="cityName" class="text-2xl sm:text-3xl font-bold mt-4">${cityName}</h2>
      <p id="temperature" class="text-xl sm:text-2xl mt-2">${temperature}</p>
      <p id="description" class="text-lg sm:text-xl mt-1">${condition}</p>
    </div>
        `;

            document.querySelector("#weatherContainer").innerHTML = weatherInfo;
        }
      });
  }
});
