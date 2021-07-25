let city = "Минск";
let inputName = document.querySelector(".input");
let textInfo = document.querySelector("#none");

function dispayNone() {
  textInfo.classList.add("hide");
}
let button = document.querySelector("#button").addEventListener("click", function () {
  dispayNone();
  if (inputName.value === "") {
    inputName.classList.add("error");
    alert("Введите данные в красный квадрат о городе");
    if (inputName.value === !"") {
      inputName.classList.remove("error");
    }
  }
});
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sec() {
  textInfo.style.color = "#" + getRandomInt(0, 9) + getRandomInt(0, 9) + getRandomInt(0, 9);
}

setInterval(sec, 500);

let wather = document.querySelector(".weather");
function randomColor() {
  wather.style.backgroundColor = `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`;
}

function getRandom(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

function valueGet() {
  city = inputName.value;
}

let apiKey = "6c273cbb2593e6efce1a4c12e3db2db5";
function fetchData() {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      let cityName = document.querySelector(".City");
      cityName.innerHTML = data.name;
      if (cityName.textContent === "undefined") {
        cityName.textContent = "Город не найден";
      }
     
      let temperature = document.querySelector(".temperature");
      temperature.innerHTML = Math.floor(data.main.temp - 273) + "&deg";
      
    
      
     let disclaimer = document.querySelector(".disclaimer");
     disclaimer.textContent = data.weather[0]["description"];
     
      let ico = document.querySelector(".ico");
      ico.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    
      
      
     
    })
    .catch(function () {});
}
function pDispayNone() {
  if (cityName.textContent === "undefined") temperature.classList.add("hide");
}
inputName.addEventListener("change", () => {
  valueGet();
  fetchData();
  randomColor();
  dispayNone();
});
