var tasks = {};

var currentDate = function() {
    var date = moment().format("dddd, MMMM Do");

    console.log(date);

    $('#currentDay').append(date);
}

var saveTaskOne = function() {
    var text = $('#taskTextOne').val();
    console.log(text);
}