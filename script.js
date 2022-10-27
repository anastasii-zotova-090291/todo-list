let userName = prompt('Введите свое имя:');

console.log(userName)

let myTitle = document.getElementById('title');

if(userName) {
    myTitle.innerHTML = 'Ваш список дел, ' + userName;
} else {
    myTitle.innerHTML = 'Список дел анонимного пользователя';
}

let count = 0;

function add() {
    let myContainer = document.getElementById('container');
    let myInput = document.getElementById('input');
    count++;

    myContainer.innerHTML += "<p>" + count + " " + myInput.value + "</p>";
    myInput.value = '';
    myInput.focus();
}
