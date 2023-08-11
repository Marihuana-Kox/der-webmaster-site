//npm install axios
const TOKEN = "5920795656:AAFUpJOmddTnIgp1USZZJsUBeWBcBca9SCI"
const CHAT_ID = "-1001946139705"
const URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
// console.log(navigator.userAgent);
// Модуль для копирования html кода формы для добавления в другое место
// const parent = document.querySelector("#besthellen_form");
// let elems = parent.children;
// let formHTML = "";
// console.log(elems.length)
// $.each(elems, function(index, value){
//     console.log(index+" : "+value.outerHTML)
// })

var x,y
x = getRandomInt(10)
y = getRandomInt(10)
$(":input[name='capcha']").attr('placeholder', x + ' + ' + y + ' = ?')

document.getElementById("besthellen_form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = this.name.value;
    let capcha = this.capcha.value;
    let email = this.email.value;
    let select = this.select_produkt.value;
    let brife = this.brife.value;

    if(!capchaGenerator(x, y, capcha))
        noValidText("Капча не прошла проверку")
    else if(!chekString(name)) 
        noValidText("Имя не прошло проверку")   
    else if(!chekEmail(email))
        noValidText("Email не прошел проверку")
    else if(!chekText(brife))
        noValidText("Бриф не прошел проверку")
    else {
        
        let message = `<b>Заказчик: </b>${name} \n`;
        message += `<b>Адресс : </b> ${email} \n`; 
        message += `<b>Выбор : </b> ${select} \n`; 
        message += `<b>Бриф : </b> ${brife} \n`; 
        message += `<b>Форма : </b> Offer \n`;

        sendChat(message)
        popapBesthellen()
    }

})
document.getElementById("footer_beshtellen_form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = this.name.value;
    let capcha = this.capcha.value;
    let email = this.email.value;
    let select = this.select_produkt.value;
    let brife = this.brife.value;

    if(!capchaGenerator(x, y, capcha))
        noValidTextFooter("Капча не прошла проверку")
    else if(!chekString(name)) 
        noValidTextFooter("Имя не прошло проверку")   
    else if(!chekEmail(email))
        noValidTextFooter("Email не прошел проверку")
    else if(!chekText(brife))
        noValidTextFooter("Бриф не прошел проверку")
    else {
        
        let message = `<b>Заказчик: </b>${name} \n`;
        message += `<b>Адресс : </b> ${email} \n`; 
        message += `<b>Выбор : </b> ${select} \n`; 
        message += `<b>Бриф : </b> ${brife} \n`; 
        message += `<b>Форма : </b> Footer \n`; 

        sendChat(message)
        popapBesthellen()
    }

})
// Проверка капчи
function capchaGenerator(x, y, capcha) {
    let result = (capcha == (x + y)) ? true : false;
    return result
}
// Проверка полей с именем
function chekString(text) {
    let regexp = /^[^0-9][\sA-Za-zА-Яа-я]*$/; 
    let cou = text.length
    let result = (cou > 30) ? false : regexp.test(text);
    return result
}
// Проверка email
function chekEmail(email) {
    let regexp = /^[a-z0-9-._]+@[a-z0-9-_]+[.][a-z]{2,3}$/;
    return regexp.test(email)
}
// Проверка текста
function chekText(text) {
    let regexp = /^[\sA-Za-zА-Яа-я0-9]*$/; 
    return regexp.test(text);
}
// Генерация чисел для капчи
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Отправка сообщения в телеграмм канал методом axios post
function sendChat(message) {
    axios.post(URL, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
    })
}
// Сообщение об успешной отпраке заявки и закрывание формы
function popapBesthellen() {
    $('.wrapper__coner').fadeOut(600)
    $('.succes_messege').fadeIn(300)
    setTimeout(() => {
        $('.succes_messege').fadeOut(300);
    }, 3000)
}
// Выод ошибок валидации сообщений offer
function noValidText(mess) {
    $('.error_message').fadeIn(300).html(`<span>${mess}</span>`);
    setTimeout(() => {
        $('.error_message').fadeOut(300);
    }, 3000);
}
// Выод ошибок валидации сообщений Footer
function noValidTextFooter(mess) {
    $('.footer_error_message').fadeIn(300).html(`<span style='color:red'>${mess}</span>`);
    setTimeout(() => {
        $('.footer_error_message > span').remove();
        $('.footer_error_message').html(`<span>Попробуйте ещё!</span>`);
    }, 3000);
    
}