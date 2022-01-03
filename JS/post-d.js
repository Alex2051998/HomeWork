// let jeson = JSON.parse(localStorage.getItem('key'));
// let wrap = document.createElement('div');
// fetch('https://jsonplaceholder.typicode.com/users/4/posts').then(response => response.json()).then(array =>{
//     console.log(jeson[0].id);
//     let wrapComents = document.createElement('div');
//     for (let element of array){
//         let postComentDiv = document.createElement('div');
//         postComentDiv.innerHTML = `
//                           <h2>PostId - ${element.postId}</h2>
//                           <h2>Id - ${element.id}</h2>
//                           <h2>Name - ${element.name}</h2>
//                           <h2>Email - ${element.email}</h2>
//                           <h2>Body - ${element.body}</h2>`
//         wrapComents.append(postComentDiv);
//     }
//     wrap.append(wrapComents);
//    document.body.appendChild(wrap);
// });
// ' + jeson.id + '




// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)

// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//

let wrap = document.createElement('div');
wrap.classList.add('postwrap');
let jeson = JSON.parse(localStorage.getItem('key'));
fetch('https://jsonplaceholder.typicode.com/users/' + jeson[0].id + '/posts').then(response => response.json()).then(arrayArr =>{
    console.log(jeson[0].id);
    let wrapComents = document.createElement('div');
    wrapComents.classList.add('postCom11');
    for (let element of arrayArr){
        console.log(element);
        let postComentDiv = document.createElement('div');
        postComentDiv.classList.add('postCom1');
        postComentDiv.innerHTML = `
                          <h4>userId - ${element.userId}</h4>
                          <h4>id - ${element.id}</h4>
                          <h4>title - ${element.title}</h4>
                          <h4>body - ${element.body}</h4>
                                                                         
                          `
        wrapComents.append(postComentDiv);
    }
    wrap.append(wrapComents);
    // wrap.append(itemButton);
});

// wrap.append(itemButton);
document.body.append(wrap);





// let wrap = document.createElement('div');
// let jeson = JSON.parse(localStorage.getItem('key'));
fetch('https://jsonplaceholder.typicode.com/posts/' + jeson[0].id + '/comments').then(response => response.json()).then(arrayArr =>{
    console.log(jeson[0].id);
    let wrapComents = document.createElement('div');
    wrapComents.classList.add('postCom22');
    for (let element of arrayArr){
        console.log(element);
        let postComentDiv = document.createElement('div');
        postComentDiv.classList.add('postCom2');
        postComentDiv.innerHTML = `
                          <h2>PostId - ${element.postId}</h2>
                          <h2>Id - ${element.id}</h2>
                          <h2>Name - ${element.name}</h2>
                          <h2>Email - ${element.email}</h2>
                          <h2>Body - ${element.body}</h2>
                                                   
                          `
        wrapComents.append(postComentDiv);
    }
    wrap.append(wrapComents);
    // wrap.append(itemButton);
});

// wrap.append(itemButton);
document.body.append(wrap);