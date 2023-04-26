fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.body.style.backgroundImage = `url('${data.urls.full}')`;
    document.getElementById("author").textContent = ` By: ${data.user.name}`;
  })
  .catch((err) => {
    console.log("someghing went wrong");
    document.body.style.backgroundImage = "url('error.jpg')";
  });

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    console.log(res.status);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("test").innerHTML = `
    <img src=${data.image.small}/>
    <spam>${data.market_data.ath.usd} usd</spam>
    `;
  })
  .catch(() => {
    document.getElementById("test").innerHTML = `
    <span>Refresh website</span>
    `;
  });

function actualizarReloj() {
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();
  var ampm = horas >= 12 ? "PM" : "AM";
  horas = horas % 12;
  horas = horas ? horas : 12;
  minutos = minutos < 10 ? "0" + minutos : minutos;
  segundos = segundos < 10 ? "0" + segundos : segundos;
  var horaActual = horas + ":" + minutos + ":" + segundos + " " + ampm;
  document.getElementById("reloj").innerHTML = `
    <h4>${horaActual}</h4>
    `;
}
setInterval(actualizarReloj, 1000);

navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
            <div id="test2">
            <img src="${iconUrl}" />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
          </div>
          
                <p class="weather-city">${data.name}</p>
            `;
    })
    .catch((err) => console.error(err));
});
