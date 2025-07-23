function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector("#date");
    newYorkDateElement.innerHTML = moment().format("MMMM	D, YYYY");

    let newYorkTimeElement = document.querySelector("#time");
    newYorkTimeElement.innerHTML = moment()
      .tz("America/New_York")
      .format("hh:mm:ss [<small>]A[</small>]");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector("#date");
    parisDateElement.innerHTML = moment().format("MMMM D, YYYY");

    let parisTimeElement = parisElement.querySelector("#time");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("hh:mm:ss [<small>]A[</small>]");
  }
}

updateTime();

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
