// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

// let wrap = document.createElement('div');
//     let div = document.createElement('div');
//     div.append(localStorage.getItem('key'));
// wrap.append(div);
// document.body.append(wrap);

let wraper = document.createElement('div');
wraper.classList.add('wrapercss');
let jeson = JSON.parse(localStorage.getItem('key'));
jeson.forEach(item => {
        for (let key in item){
                let div = document.createElement('div');
                div.innerText = `${key} : ${item[key]}`;
                wraper.append(div)
                document.body.appendChild(wraper);
        }
});




let wrap = document.createElement('div');
wrap.classList.add('wrapcss');
let itemButton = document.createElement('button');
    itemButton.innerText = 'post of current user';
    itemButton.classList.add('button1');

        itemButton.onclick = function () {
                itemButton.disabled = true;
            window.open('post-details.html');
                fetch('https://jsonplaceholder.typicode.com/user/' + jeson[0].id + '/posts').then(response => response.json()).then(arrayArr =>{
                    console.log(jeson[0].id);
                  let wrapComents = document.createElement('div');
                  wrapComents.classList.add('wrapCom');
                  for (let element of arrayArr){
                      console.log(element);
                          let postComentDiv = document.createElement('div');
                          postComentDiv.classList.add('wrapCom1');
                          postComentDiv.innerHTML = `
                          <h2>Title - ${element.title}</h2>
                                                `
                          wrapComents.append(postComentDiv);
                  }
                  wrap.append(wrapComents);
                  // wrap.append(itemButton);
                });
//
//
//
        };
wrap.append(itemButton);
document.body.append(wrap);




























// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(array => {
//         console.log(array)
//         array.forEach(item => {
//             const div = document.createElement('div');
//             for (const key in item) {
//                 const div2 = document.createElement('div');
//                 if (typeof item[key] !== 'object') {
//                     div2.innerHTML = item[key];
//                 } else {
//                     for (const key2 in item[key]) {
//                         const div3 = document.createElement('div');
//                         if (typeof item[key][key2] !== 'object') {
//                             div3.innerHTML = item[key][key2];
//                         } else {
//                             for (const key3 in item[key][key2]) {
//                                 const div4 = document.createElement('div');
//                                 div4.innerHTML = item[key][key2][key3];
//                                 div3.append(div4)
//                             }
//
//                         }
//                         div2.append(div3);
//                     }
//
//                 }
//                 div.append(div2)
//
//             }
//             document.body.append(div)
//         });
//
//     });

