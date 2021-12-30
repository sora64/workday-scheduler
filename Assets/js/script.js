var currentDate = function() {
    var date = moment().format("dddd, MMMM Do");

    console.log(date);

    $('#currentDay').append(date);
}

var saveTaskOne = function() {
    var text = $('#taskTextOne')
    .val()
    .trim();

    localStorage.setItem('task1', JSON.stringify(text));

    console.log(text);
}

var saveTaskTwo = function() {
    var text = $('#taskTextTwo')
    .val()
    .trim();

    localStorage.setItem('task2', JSON.stringify(text));

    console.log(text);
}

var saveTaskThree = function() {
    var text = $('#taskTextThree')
    .val()
    .trim();

    localStorage.setItem('task3', JSON.stringify(text));

    console.log(text);
}

var saveTaskFour = function() {
    var text = $('#taskTextFour')
    .val()
    .trim();

    localStorage.setItem('task4', JSON.stringify(text));

    console.log(text);
}

var saveTaskFive = function() {
    var text = $('#taskTextFive')
    .val()
    .trim();

    localStorage.setItem('task5', JSON.stringify(text));

    console.log(text);
}

var saveTaskSix = function() {
    var text = $('#taskTextSix')
    .val()
    .trim();

    localStorage.setItem('task6', JSON.stringify(text));

    console.log(text);
}

var saveTaskSeven = function() {
    var text = $('#taskTextSeven')
    .val()
    .trim();

    localStorage.setItem('task7', JSON.stringify(text));

    console.log(text);
}

var saveTaskEight = function() {
    var text = $('#taskTextEight')
    .val()
    .trim();

    localStorage.setItem('task8', JSON.stringify(text));

    console.log(text);
}

var saveTaskNine = function() {
    var text = $('#taskTextNine')
    .val()
    .trim();

    localStorage.setItem('task9', JSON.stringify(text));

    console.log(text);
}

var loadTaskOne = function() {
    $('#taskTextOne').textContent = JSON.parse(localStorage.getItem('task1'));
}