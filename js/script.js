// $(document).ready(function() {
//     $.get("http:api.openweathermap.org/data/2.5/weather",
//     {
//         "id": "703494", //Kyiv city id in open weather map database
//         appid: "34747752906cc3846e5748a60c5d8956"
//     },
//     function (data){
//         console.log(data);
//     }
//     );
// });

// типо должна работать
// $(document).ready(function() {
//     $.get("https://api.openweathermap.org/data/2.5/weather",
//     {
//         "id": "703494", // Идентификатор города Киев в базе данных OpenWeatherMap
//         "appid": "34747752906cc3846e5748a60c5d8956"
//     },
//     function (data){
//         console.log(data);
//     }
//     );
// });

// $(document).ready(function() {
//     $.get("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={34747752906cc3846e5748a60c5d8956}",
//     function (data) {
//         // convert temperature from Kelvin to Celsius
//         var tempInCelsius = Math.round(data.main.temp - 273.15);
//         console.log(tempInCelsius);
//     });
// });

// кнопка на сегодня по умолчанию нажата
// document.getElementById("defaultOpen").click();

/*https://html5css.ru/howto/howto_js_tabs.php*/
// function openTab(evt, buttonName) {
//     // Declare all variables
//     var i, tabcontent, tablinks;

//     // Get all elements with class="tabcontent" and hide them
//     tabcontent = document.getElementsByClassName("tabcontent");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.getElementsByClassName("tablinks");
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.getElementById(buttonName).style.display = "block";
//     evt.currentTarget.className += " active";
// }

// ///////////////////////////////
// //Получаем прогноз в массив data
// function getWeather() {
//   fetch(
//     "http://api.openweathermap.org/data/2.5/weather?id=703494&lang=ru&appid=34747752906cc3846e5748a60c5d8956"
//   )
//     .then(function (resp) {
//       return resp.json();
//     })
//     .then(function (data) {
//       //добавляем название города
//       //document.querySelector(".weather__city").textContent = data.name;
//       console.log(data.name);

//       // Пример кода для вывода данных в зону полигона
//       // //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
//       // document.querySelector(".weather__forecast").innerHTML =
//       //   Math.round(data.main.temp - 273) + "&deg;";
//       // //Добавляем описание погоды
//       // document.querySelector(".weather__desc").textContent =
//       //   data.weather[0]["description"];
//       // //Добавляем иконку погоды
//       // document.querySelector(
//       //   ".weather__icon"
//       // ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
//     })
//     .catch(function () {
//       //Обрабатываем ошибки
//     });
// }

//////////////////////////////

// document.getElementById('city').addEventListener('city', function () {
//     var city = this.value;
//     getWeather(city);
//   });

//   async function getWeather() {
//     try {
//         var city = document.getElementById('city').value;
//         console.log('Название города:', city);

//         const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
//             params: {
//                 q: city,
//                 appid: '34747752906cc3846e5748a60c5d8956',
//                 units: 'metric'
//             },
//         });
//         const currentTemperature = response.data.list[0].main.temp;

//         document.querySelector('.weather-temp').textContent = Math.round(currentTemperature) + 'ºC';

//         const forecastData = response.data.list;

//         const dailyForecast = {};
//         forecastData.forEach((data) => {
//             const day = new Date(data.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' });
//             if (!dailyForecast[day]) {
//                 dailyForecast[day] = {
//                     minTemp: data.main.temp_min,
//                     maxTemp: data.main.temp_max,
//                     description: data.weather[0].description,
//                     humidity: data.main.humidity,
//                     windSpeed: data.wind.speed,
//                     icon: data.weather[0].icon,

//                 };
//             } else {
//                 dailyForecast[day].minTemp = Math.min(dailyForecast[day].minTemp, data.main.temp_min);
//                 dailyForecast[day].maxTemp = Math.max(dailyForecast[day].maxTemp, data.main.temp_max);
//             }
//         });

//         document.querySelector('.date-dayname').textContent = new Date().toLocaleDateString('en-US', { weekday: 'long' });

//         const date = new Date().toUTCString();
//         const extractedDateTime = date.slice(5, 16);
//         document.querySelector('.date-day').textContent = extractedDateTime.toLocaleString('en-US');

//         const currentWeatherIconCode = dailyForecast[new Date().toLocaleDateString('en-US', { weekday: 'long' })].icon;
//         const weatherIconElement = document.querySelector('.weather-icon');
//         weatherIconElement.innerHTML = getWeatherIcon(currentWeatherIconCode);

//         document.querySelector('.location').textContent = response.data.city.name;
//         document.querySelector('.weather-desc').textContent = dailyForecast[new Date().toLocaleDateString('en-US', { weekday: 'long' })].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

//         document.querySelector('.humidity .value').textContent = dailyForecast[new Date().toLocaleDateString('en-US', { weekday: 'long' })].humidity + ' %';
//         document.querySelector('.wind .value').textContent = dailyForecast[new Date().toLocaleDateString('en-US', { weekday: 'long' })].windSpeed + ' m/s';

//         const dayElements = document.querySelectorAll('.day-name');
//         const tempElements = document.querySelectorAll('.day-temp');
//         const iconElements = document.querySelectorAll('.day-icon');

//         dayElements.forEach((dayElement, index) => {
//             const day = Object.keys(dailyForecast)[index];
//             const data = dailyForecast[day];
//             dayElement.textContent = day;
//             tempElements[index].textContent = `${Math.round(data.minTemp)}º / ${Math.round(data.maxTemp)}º`;
//             iconElements[index].innerHTML = getWeatherIcon(data.icon);
//         });

//     } catch (error) {
//         console.error('Произошла ошибка при получении данных:', error.message);
//     }
//   }

//   function getWeatherIcon(iconCode) {
//     const iconBaseUrl = 'https://openweathermap.org/img/wn/';
//     const iconSize = '@2x.png';
//     return `<img src="${iconBaseUrl}${iconCode}${iconSize}" alt="Weather Icon">`;
//   }

//   document.addEventListener("DOMContentLoaded", function () {
//     getWeather();
//     setInterval(getWeather, 900000);
//   });

// Создаем карту Leaflet.js и добавляем ее в элемент с id "map"
// var map = L.map('map').setView([48.5160, 34.6129], 13);

// // Добавляем слой карты (например, OpenStreetMap)
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; OpenStreetMap contributors'
// }).addTo(map);
// // Создаем маркер с всплывающей подсказкой
// var marker = L.marker([48.5160, 34.6129]).addTo(map);
// marker.bindTooltip("А я вам сейчас покажу откуда<br> на Беларусь готовили нападение", {permanent: true}).openTooltip();
function getWeatherStart() {
  getTheWeatherOneDay();
  getTheWeatherInSpecifiedLocationeveryThreeHours();
  nextFourPlaces();
  getTheWeatherInSpecifiedLocationForFiveDays();
}

//для расчета даты
function getDateFromTimestamp(timestamp) {
  // Создаем объект Date из временной метки (в миллисекундах)
  var date = new Date(timestamp * 1000);
  // Форматируем дату и время
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  return date.toLocaleDateString("ru-RU", options);
}

//https://learn.javascript.ru/fetch

function getTheWeatherOneDay() {
  const cityName = document.getElementById("city").value; // Получаем значение из инпута города
  const location = cityName; // Переменная для формирования запроса

  const apiKey = `34747752906cc3846e5748a60c5d8956`; // Ключ к API OpenWeatherMap

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=ru`;

  fetch(apiUrl) // Выполняем fetch запрос
    .then((response) => {
      if (!response.ok) {
        throw new Error("Нет ответа сети");
      }
      return response.json(); // Преобразуем ответ в формат JSON
    })
    .then((data) => {
      // Обработка данных о погоде
      console.log(data); // Вывод полученных данных в консоль

      ///////////////////////////
      // document.getElementById("CityName").innerText = cityName;
      //////////////////////////////////////////////////////////////////////////////////////////

      const weatherIconDiv = document.getElementById("weatherIcon");
      weatherIconDiv.style.backgroundImage = `url(http://openweathermap.org/img/wn/${data.weather[0].icon}.png)`;
      weatherIconDiv.style.backgroundSize = "cover"; // Растягиваем изображение на всю область div
      weatherIconDiv.style.width = "100px"; // Устанавливаем нужную ширину
      weatherIconDiv.style.height = "100px"; // Устанавливаем нужную высоту

      //////////////////////////////////////////////////////////////////////////////////////////

      // Извлекаем дату из ответа API
      const date = getDateFromTimestamp(data.dt);
      // Выводим дату на веб-страницу
      document.getElementById("date").innerText = `${date}`;

      //////////////////////////////////////////////////////////////////////////////////////////

      const weatherDescription =
        data.weather[0].description.charAt(0).toUpperCase() +
        data.weather[0].description.slice(1); // Преобразуем первую букву в заглавную

      const temperature = Math.round(data.main.temp); // Записываем температуру в переменную

      document.getElementById("weather").innerText = `${weatherDescription}`; // Добавляем описание погоды и температуру
      // weatherElement.style.fontSize = "25px";

      document.getElementById("temperature").innerText = `${temperature}°C`; // Добавляем  температуру
      // weatherElement.style.fontSize = "25px";

      //////////////////////////////////////////////////////////////////////////////////////////

      // Восход - закат
      const sunrise = getDateFromTimestamp(data.sys.sunrise);
      const sunset = getDateFromTimestamp(data.sys.sunset);

      // Предполагая, что sunrise и sunset имеют формат "День недели, День Месяц Год в Часы:Минуты"
      // Первым делом нужно разделить строку по пробелам
      var sunriseParts = sunrise.split(" ");
      var sunsetParts = sunset.split(" ");

      // Получаем только время (часы и минуты)
      var sunriseTime = sunriseParts[sunriseParts.length - 1].split(":");
      var sunsetTime = sunsetParts[sunsetParts.length - 1].split(":");

      // Извлекаем часы и минуты
      var sunriseHours = sunriseTime[0];
      var sunriseMinutes = sunriseTime[1];

      var sunsetHours = sunsetTime[0];
      var sunsetMinutes = sunsetTime[1];

      // Теперь можно использовать полученные часы и минуты для вывода
      document.getElementById(
        "sunriseSunset"
      ).innerText = `Восход: ${sunriseHours}:${sunriseMinutes} \nЗакат: ${sunsetHours}:${sunsetMinutes}`;

      // getTheWeatherInSpecifiedLocationeveryThreeHours();
      ////////////////////////////////////////////////////////////////////////////////////////////
    })
    .catch((error) => {
      console.error("Ошибка получения данных о погоде:", error);
    });
}

function getTheWeatherInSpecifiedLocationeveryThreeHours() {
  const cityName = document.getElementById("city").value; // Получаем значение из инпута города
  const location = cityName; // Переменная для формирования запроса

  const apiKey = `34747752906cc3846e5748a60c5d8956`; // Ключ к API OpenWeatherMap

  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apiKey}&units=metric&lang=ru`
  )
    .then((response) => response.json())
    .then((data) => {
      const forecasts = data.list.slice(0, 8); // Берем первые 8 прогнозов (на 3 часа вперед)
      forecasts.forEach((forecast, index) => {
        const date = new Date(forecast.dt * 1000);
        const temperature = forecast.main.temp;
        const feelsLike = forecast.main.feels_like;
        const icon = forecast.weather[0].icon;
        const windSpeed = forecast.wind.speed;

        document.getElementById(`t${index + 1}`).textContent =
          date.toLocaleTimeString();
        document.getElementById(
          `i${index + 1}`
        ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;
        document.getElementById(`f${index + 1}`).textContent =
          forecast.weather[0].description;
        document.getElementById(`temp${index + 1}`).textContent = temperature;
        document.getElementById(`r${index + 1}`).textContent = feelsLike;
        document.getElementById(`w${index + 1}`).textContent = windSpeed;

        // nextFourPlaces();
      });
    })
    .catch((error) =>
      console.error("Ошибка получения данных о погоде:", error)
    );
}

function nextFourPlaces() {
  const cityName = document.getElementById("city").value; // Получаем значение из инпута города
  const location = cityName;
  const apiKey = "34747752906cc3846e5748a60c5d8956"; // Ключ к API OpenWeatherMap

  // Запрос к API для получения ближайших мест
  fetch(
    `https://api.openweathermap.org/data/2.5/find?q=${location}&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const nearbyPlacesData = data.list.slice(0, 4); // Получаем первые 4 ближайших места

      // Заполняем список ближайших мест
      for (let i = 0; i < nearbyPlacesData.length; i++) {
        const placeElement = document.getElementById(`place${i + 1}`);
        if (placeElement) {
          placeElement.textContent = nearbyPlacesData[i].name; // Выводим название места

          // Получаем иконку погоды
          const weatherIcon = nearbyPlacesData[i].weather[0].icon;
          const iconUrl = `http://openweathermap.org/img/wn/${weatherIcon}.png`;

          // Создаем элемент для отображения иконки погоды
          const iconElement = document.createElement("img");
          iconElement.src = iconUrl;
          iconElement.alt = "Weather Icon";

          // Добавляем иконку погоды в элемент списка места
          placeElement.appendChild(iconElement);

          // Получаем температуру
          const temperature = nearbyPlacesData[i].main.temp;
          // Преобразуем кельвины в градусы Цельсия и округляем до целого числа
          const celsiusTemperature = Math.round(temperature - 273.15);

          // Создаем элемент для отображения температуры
          const temperatureElement = document.createElement("span");
          temperatureElement.textContent = ` ${celsiusTemperature}°C`;

          // Добавляем температуру в элемент списка места
          placeElement.appendChild(temperatureElement);
        }
      }
    })
    .catch((error) =>
      console.error("Ошибка получения данных о ближайших местах:", error)
    );
  // getTheWeatherInSpecifiedLocationForFiveDays();
}

async function getTheWeatherInSpecifiedLocationForFiveDays() {
  const cityName = document.getElementById("city").value; // Получаем значение из инпута города
  const location = cityName;
  const apiKey = "34747752906cc3846e5748a60c5d8956"; // Ключ к API OpenWeatherMap

  const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=${apiKey}&units=metric&lang=ru`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Обновление данных на странице
      // Извлекаем дату из ответа API
      const date = getDateFromTimestamp(data.dt);
      // Выводим дату на веб-страницу
      document.getElementById("date").innerText = `${date}`;
      for (let i = 0; i < 4; i++) {
        // const timestamp = data.list[i].dt; // Время в секундах
        // const dayOfWeek = getDateFromTimestamp(timestamp); // Получаем день недели

        // document.getElementById("t" + (i + 1)).textContent = dayOfWeek; // День недели
        const iconCode = data.list[i].weather[0].icon; // Иконка
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
        document.getElementById(
          "icon" + (i + 1)
        ).innerHTML = `<img src="${iconUrl}" alt="Weather Icon">`;
        document.getElementById("ft" + (i + 1)).textContent =
          data.list[i].weather[0].description; // Описание погоды
        document.getElementById("tempt" + (i + 1)).textContent =
          data.list[i].main.temp; // Температура
        document.getElementById("rt" + (i + 1)).textContent =
          data.list[i].main.feels_like; // Ощущаемая температура
        document.getElementById("wt" + (i + 1)).textContent =
          data.list[i].wind.speed; // Скорость ветра
      }
    })
    .catch((error) => console.error("Error:", error));
}

// function displayDaysOfWeek() {
//   const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
//   const today = new Date().getDay(); // Получаем текущий день недели (0 - воскресенье, 1 - понедельник, ..., 6 - суббота)

//   let output = '<p>Текущий день недели: ' + days[today] + '</p>';
//   output += '<p>Следующие дни недели:</p>';

//   // Выводим следующие дни недели
//   for (let i = 1; i < 4; i++) {
//     const nextDayIndex = (today + i) % 7; // Берем остаток от деления, чтобы вернуться к воскресенью после субботы
//     output += '<p>' + days[nextDayIndex] + '</p>';
//     document.getElementById("t" + (i + 1)).textContent = output;
//   }

  
// }






// document.addEventListener('DOMContentLoaded', function () {
//   // Функция для запроса геолокации
//   function getLocation() {
//       if (navigator.geolocation) {
//           navigator.geolocation.getCurrentPosition(showPosition);
//       } else {
//           console.log("Geolocation is not supported by this browser.");
//       }
//   }
