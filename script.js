// Необхідно створити односторінковий сайт із прогнозом погоди.
// Для отримання прогнозу використовуйте https://openweathermap.
// org/. Зареєструйтеся та отримайте ключ.
// На сторінці має бути 2 вкладки:
// ■ Today – прогноз погоди на сьогодні;
// ■ 5-day forecast – прогноз погоди на наступні 5 днів.
// Під час завантаження сторінки відображається вкладка Today.
// Поточне місто визначається за координатами користувача, а якщо
// браузер не підтримує геолокацію, відображається місто, в якому
// ви живете. Для вибору іншого міста користувач може ввести назву
// в текстове поле для пошуку.
// На вкладці Today відображається 3 блоки.
// 1. Короткі відомості про поточну погоду:
// • дата;
// • іконка;
// • опис прогнозу;
// • температура;
// • як відчувається температура;
// • світанок;
// • захід сонця;
// • тривалість дня.
// 2. Погодинний прогноз на залишок дня:
// • час;
// • іконка;
// • опис прогнозу;
// • температура;
// • як відчувається температура;
// • швидкість та напрям вітру.

// 3. Найближчі міста та їх прогноз:
// • назва;
// • іконка;
// • температура.
// У текстовому полі для пошуку завжди має позначатися назва
// міста, за яким відображається прогноз погоди. Навіть у тому ви-
// падку, якщо місто визначилося за геопозицією.

// Якщо користувач ввів неіснуюче місто або API не може повер-
// нути вам інформацію про введене місто, то інформуємо про це за
// допомогою такої сторінки:

// На вкладці 5-day forecast відображається 2 блоки.
// 1. Короткий прогноз на кожен з п’яти днів:
// • день тижня;
// • дата;
// • іконка;
// • температура;
// • опис прогнозу.
// 2. Погодинний прогноз для обраного дня:
// • час;
// • іконка;
// • опис прогнозу;
// • температура;
// • як відчувається температура;
// • швидкість та напрям вітру.

// При натисканні на блок короткого прогнозу одного з п’яти днів
// необхідно його візуально виділити і нижче відобразити прогноз
// погоди на цей день.
// При відкритті цієї вкладки за замовчуванням, обраним має
// бути поточний день.

// Звертаємо вашу увагу на те, що сайт односторінковий. А це
// означає, що за будь-яких кліків, при пошуку прогнозу для іншого
// міста або при переході по вкладках, сторінка в браузері не (!) по-
// винна оновлюватися. Вам потрібно змінювати структуру сторінки
// за допомогою JavaScript.

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
function getWeather() {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?id=703494&lang=ru&appid=34747752906cc3846e5748a60c5d8956"
  )
    .then(function (resp) {
      return resp.json();
    })
    .then(function (data) {
      //добавляем название города
      document.querySelector(".weather__city").textContent = data.name;
      console.log(data.name);
      //data.main.temp содержит значение в Кельвинах, отнимаем от  273, чтобы получить значение в градусах Цельсия
      document.querySelector(".weather__forecast").innerHTML =
        Math.round(data.main.temp - 273) + "&deg;";
      //Добавляем описание погоды
      document.querySelector(".weather__desc").textContent =
        data.weather[0]["description"];
      //Добавляем иконку погоды
      document.querySelector(
        ".weather__icon"
      ).innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png">`;
    })
    .catch(function () {
      //Обрабатываем ошибки
    });
}

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

//https://learn.javascript.ru/fetch

function getWeatherInSpecifiedLocation() {
  const cityName = document.getElementById("city").value; // Получаем значение из инпута города
  const location = cityName; // Переменная для формирования запроса
  const apiKey = `34747752906cc3846e5748a60c5d8956`; // Ключ к API OpenWeatherMap

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

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

      //////////////////////////////////////////////////////////////////////////////////
      const temperature = document.querySelector(".temperature");
      temperature.textContent = `${data.main.temp}°C`;
      /////////////////////////////////////////////////////////////////////////////////
      const weatherIcon = document.querySelector(".weather-icon");
      const weatherDescription = document.querySelector(".weather-description");
      
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      weatherDescription.textContent = data.weather[0].description;
    })
    .catch((error) => {
      console.error("Возникла проблема с операцией получения:", error);
    });
}
