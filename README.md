# Тестовое задание:

Данные пользователей [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

Ссылка на макет [https://www.figma.com/file/X8Ke95Xuc9ZXrZJ3DzQjOW/Тестовое-задание?node-id=2%3A2](https://www.figma.com/file/X8Ke95Xuc9ZXrZJ3DzQjOW/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=2%3A2)

## Необходимо сверстать предложенный макет, и написать простое SPA на React.
    
Задание на вёрстку выглядит следующим образом: </br>
Необходимо сверстать две страницы “Список пользователей” и “Профиль пользователя”. </br>

### Список пользователей:
1. Вывести 10 пользователей соответственно макету. Данные взять  с [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
2. Пока идет загрузка списка пользователей должен быть индикатор загрузки( дизайн любой на усмотрение исполнителя )
3. Вывести на карточку: 
    - name
    - address.city
    - company.name
4. Кнопка “Подробнее” должна вести на “Профиль пользователя”
5. Реализовать фильтрацию списка по признаку Name и City в алфавитном порядке.
### Профиль пользователя:
1. Вывести в профиле:
    - name
    - username
    - email
    - address.street
    - address.city
    - address.zipcode
    - phone
    - website
2. Все поля формы, кроме Comment, должны быть предзаполнены из [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
3. Реализовать кнопку изменить, изначально поля должны быть readonly, после нажатия на кнопку поля можно редактировать
4. Реализовать валидацию на клиенте
5. Все поля формы, кроме поля Comment, обязательны для заполнения
6. Из данных формы при отправке нужно сформировать JSON и вывести его в консоль или alert.

![demogiff](demo/demo_user_panel.gif)  
    