/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан2",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const deleteElement=(e)=>{
    e.target.remove();
};
const btn=document.querySelector('button');
btn.addEventListener('click',deleteElement);
// btn.addEventListener('click',()=>{
//     alert("second click");
// });


const banners=document.querySelectorAll('.promo__adv img');
//banners.remove();
banners.forEach(item=>{
    item.remove();
});

const genre=document.querySelector('.promo__genre');
//console.log(genre);
genre.innerHTML="драма";

const fon=document.querySelector('.promo__bg');
console.log(fon);
fon.style.backgroundImage='url("img/bg.jpg")';
//fon.insertAdjacentElement("afterbegin",'<img src="img/bg.jpg"></img>');
{/* <img src="img/bg.jpg"></img> */}
//fon.background-Image("img/bg.jpg");

const ackButton2=document.querySelector('#ackButton');
console.log(ackButton2);
ackButton2.addEventListener('click',()=>{
    //  filmlist.innerHTML+=`
    //  <li class="promo__interactive-item">${1} jkhkj
    //  <div class="delete"></div>
    //  </li>`;
    document.querySelector('.promo__adv-title').innerHTML="qqq";
    movieDB.movies.push("ddd");
    console.log(movieDB.movies);
});

const filmlist=document.querySelector('.promo__interactive-list');
filmlist.innerHTML="";
movieDB.movies.sort();
movieDB.movies.forEach((item,i)=>{
    filmlist.innerHTML+=`
        <li class="promo__interactive-item">${i+1} ${item}
        <div class="delete"></div>
        </li>`;
    
});




// for (let i=0;i++;i<movieDB.movies.length) {
//     filmlist[i]=movieDB.movies[i];
// }

