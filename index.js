function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM	D, YYYY");

    let newYorkTimeElement = document.querySelector(".time");
    newYorkTimeElement.innerHTML = moment().tz("America/New_York");
  }
}
updateTime();

let parisElement = document.querySelector("#paris");
if (parisElement) {
  let parisDateElement = parisElement.querySelector(".date");
  parisDateElement.innerHTML = parisTime.format("MMMM D, YYYY");

  let parisTime = moment().tz("Europe/Paris");

  let parisTimeElement = parisElement.querySelector(".time");
  parisTimeElement.innerHTML = parisTime.format("hh:mm:ss");
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	D, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("hh:mm:ss")}</div>
  `;
}
setInterval(updateTime, 1000);
