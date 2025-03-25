let url = "https://kushallegit.github.io/json-examples/cars.json";

// Fetch the JSON data from the provided URL
fetch(url)
  .then((response) => response.json())  // Parse the JSON response
  .then((data) => {
    // Call the function to display car data in HTML
    displayCarData(data);
  })
  .catch((error) => {
    console.log("Unable to connect to the JSON file:", error);
  });

// Function to display car data
function displayCarData(cars) {
  const container = document.getElementById("car-container");
  container.innerHTML = ""; // Clear any existing content inside the container

  // Loop through the car data and create a new HTML structure for each car
  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
      <img src="${car.image}" alt="${car.brand} ${car.model}">
      <h3>${car.brand} ${car.model} (${car.year})</h3>
      <p><span>Owner:</span> ${car.owner}</p>
      <p><span>Year:</span> ${car.year}</p>
      <p><span>Model:</span> ${car.model}</p>
    `;

    // Append the new car card to the container
    container.appendChild(carCard);
  });
}
