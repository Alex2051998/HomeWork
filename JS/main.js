// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//


fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(array => {
    let wrap = document.createElement('div');
    for (let item of array) {
        let arrayItem = document.createElement('div');
        arrayItem.classList.add('indexItem');
        arrayItem.innerHTML = `
           <h3>${item.id}</h3> 
           <h4>${item.name}</h4> 
        `;
        let lsArr = [];
        let itemButton = document.createElement('button');
        itemButton.innerText = 'Click'
        arrayItem.append(itemButton);
        wrap.append(arrayItem);

        itemButton.onclick = function (ev) {
            lsArr = [];
            window.open('user-details.html');
            lsArr.push({
                id: item.id,
                name: item.name,
                username: item.username,
                email: item.email,
                street: item.address.street,
                suite: item.address.suite,
                city: item.address.city,
                zipcode: item.address.zipcode,
                lat: item.address.geo.lat,
                lag: item.address.geo.lag,
                phone: item.phone,
                website: item.website,
                companyName: item.company.name,
                companyCatchPhrase: item.company.catchPhrase,
                companyBs: item.company.bs,
            });
            localStorage.setItem('key', JSON.stringify(lsArr));
        };
    }
    document.body.append(wrap);

});
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)