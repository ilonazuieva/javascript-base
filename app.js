// 1.Переменные
// Мутирование
const firstName = 'Ilona'
const age = 26
console.log('name:' + firstName + ', age: ' + age )
const lastName = prompt('Put your surname')
alert(firstName + '' + lastName)

// 2.Операторы
let currentYear = 2021
const cat = 2
const dog = 3
console.log(cat + dog)
console.log(currentYear++)// приоритет оператора выполниться 2021
console.log(currentYear) // получим 2022 оператор ++ инкрементирует на одиницу
console.log(++currentYear)// вот так сразу выведит 2022

const a = 10
let c = 32
c = c + a // c = 42 или можно написать :
c += a // тоже самое
c -= a // с минусом

//4.Типы данных (приметивные)
const isMe = true
const num = 26
const g = 'river'
let x
console.log(typeof isMe) // boolean
console.log(typeof num)// number
console.log(typeof g) // string
console.log(typeof x) // null - object

// 5.Приоретет операторов
//mdc документация по приоритетам

//6.Условные операторы
//const сourseStatus = 'pendin' // ready,fail,pending if else
//тернарный оператор



