let city = ['Брест'];
let inputName = document.querySelector(".input")
city = inputName.value
console.log (inputName.value)
let apiKey = "6c273cbb2593e6efce1a4c12e3db2db5";
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`)
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    let cityName = document.querySelector(".City").innerHTML = data.name ;
    let temperature = (document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp - 273) + "&deg");
    let disclaimer = (document.querySelector(".disclaimer").textContent = data.weather[0]["description"]);
    let ico = (document.querySelector(".ico").innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`);
  })
  .catch(function () {});


