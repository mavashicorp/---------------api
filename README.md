Необхідно створити односторінковий сайт із прогнозом погоди.
Для отримання прогнозу використовуйте https://openweathermap.
org/. Зареєструйтеся та отримайте ключ.
На сторінці має бути 2 вкладки:
■ Today – прогноз погоди на сьогодні;
■ 5-day forecast – прогноз погоди на наступні 5 днів.
Під час завантаження сторінки відображається вкладка Today.
Поточне місто визначається за координатами користувача, а якщо
браузер не підтримує геолокацію, відображається місто, в якому
ви живете. Для вибору іншого міста користувач може ввести назву
в текстове поле для пошуку.
На вкладці Today відображається 3 блоки.
1. Короткі відомості про поточну погоду:
• дата;
• іконка;
• опис прогнозу;
• температура;
• як відчувається температура;
• світанок;
• захід сонця;
• тривалість дня.
2. Погодинний прогноз на залишок дня:
• час;
• іконка;
• опис прогнозу;
• температура;
• як відчувається температура;
• швидкість та напрям вітру.

3. Найближчі міста та їх прогноз:
• назва;
• іконка;
• температура.
У текстовому полі для пошуку завжди має позначатися назва
міста, за яким відображається прогноз погоди. Навіть у тому ви-
падку, якщо місто визначилося за геопозицією.

Якщо користувач ввів неіснуюче місто або API не може повер-
нути вам інформацію про введене місто, то інформуємо про це за
допомогою такої сторінки:

На вкладці 5-day forecast відображається 2 блоки.
1. Короткий прогноз на кожен з п’яти днів:
• день тижня;
• дата;
• іконка;
• температура;
• опис прогнозу.
2. Погодинний прогноз для обраного дня:
• час;
• іконка;
• опис прогнозу;
• температура;
• як відчувається температура;
• швидкість та напрям вітру.

При натисканні на блок короткого прогнозу одного з п’яти днів
необхідно його візуально виділити і нижче відобразити прогноз
погоди на цей день.
При відкритті цієї вкладки за замовчуванням, обраним має
бути поточний день.

Звертаємо вашу увагу на те, що сайт односторінковий. А це
означає, що за будь-яких кліків, при пошуку прогнозу для іншого
міста або при переході по вкладках, сторінка в браузері не (!) по-
винна оновлюватися. Вам потрібно змінювати структуру сторінки
за допомогою JavaScript.