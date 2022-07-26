function askUserName() {
    var name = prompt("Qual o seu nome?");
    return name
}

function changeDate() {
    var today = new Date();
    var todayElement = document.getElementById("textDateToday");
    todayElement.innerHTML =
        "Hoje é um <b>" + today.getDate() + "/" + (today.getMonth() + 1) + "</b>";
}

function sendForm() {
    var nameValue = document.querySelector("#txt-name").value
    var errorElement = document.querySelector("#name-error.error");
    if (nameValue === '') {
        errorElement.style.display = 'block'
        var newName = askUserName()
        document.querySelector("#txt-name").value = newName
    } else {
        errorElement.style.display = 'none'
    }
    return false;
}

function createList(nameList) { // ['Adriano', 'Maria', 'João']
    var listElement = document.getElementById('name-list');
    listElement.replaceChildren()

    nameList.forEach(function (name) {
        var item = document.createElement('li')
        item.innerHTML = name
        listElement.appendChild(item)
    })
}

changeDate()
createList(['Adriano', 'Maria', 'João', 'Max', 'Felipe', 'Kelly'])

document.getElementById('txt-name').addEventListener('change', function (event) {
    document.querySelector("#inputName").innerHTML = event.target.value
})