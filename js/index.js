'use strict';
const personalMovieDB = {
    count : prompt("Сколько фильмов вы уже посмотрели"),
    movies : {},
    actors : {},
    genres : [],
    privat : false
}
const a = prompt("Один из последних просмотренных фильмов?")
const b = prompt("Какую оценку вы ему дадите?")
const c = prompt("Один из последних просмотренных фильмов?")
const d = prompt("Какую оценку вы ему дадите?")
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB)

