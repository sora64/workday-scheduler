var currentDate = function() {
    var date = moment().format("dddd, MMMM Do");

    console.log(date);

    $('#currentDay').append(date);
}