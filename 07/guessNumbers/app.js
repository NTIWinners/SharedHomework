// функция Math.random() генерирует случайное число от 0 до 1
// функция Math.ceil() округляет число в большую сторону

var number1 = Math.ceil(Math.random() * 10);
console.log("Угадайте загаданное число");
var guess1 = parseInt(require('readline-sync').question());

if(guess1 == number1){
    console.log("Поздравляю, вы угадали!");
} else {
    console.log("Нет, вы не смогли угадать");
}
console.log();

var number2 = Math.ceil(Math.random() * 10);
console.log("Угадайте загаданное число");
var guess2 = parseInt(require('readline-sync').question());

if(guess2 == number2){
    console.log("Поздравляю, вы угадали!");
} else {
    console.log("Нет, вы не смогли угадать");
}
console.log();

var number3 = Math.ceil(Math.random() * 10);
console.log("Угадайте загаданное число");
var guess3 = parseInt(require('readline-sync').question());

if(guess3 == number3){
    console.log("Поздравляю, вы угадали!");
} else {
    console.log("Нет, вы не смогли угадать");
}
console.log();

var number4 = Math.ceil(Math.random() * 10);
console.log("Угадайте загаданное число");
var guess4 = parseInt(require('readline-sync').question());

if(guess4 == number4){
    console.log("Поздравляю, вы угадали!");
} else {
    console.log("Нет, вы не смогли угадать");
}
console.log();

process.exit();