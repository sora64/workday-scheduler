// function to display today's date in the page's header, using moment.js
var currentDate = function() {
    var date = moment().format('dddd, MMMM Do');

    $('#currentDay').append(date);
}

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskOne = function() {
    if (localStorage.getItem('task1') !== null) {
        var taskOneText = JSON.parse(localStorage.getItem('task1'));    
        $('#oldTaskOne').text(taskOneText);
        $('#taskInputOne').addClass('hidden');
        $('#oldTaskOne').removeClass('hidden');
    } else {
        console.log('Task 1 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputOne').on('blur', function() {
    $('oldTaskOne').text(JSON.parse(localStorage.getItem('task1')));
}, loadTaskOne);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskOne').on('click', function() {
    $('#oldTaskOne').addClass('hidden');
    $('#taskInputOne').removeClass('hidden');
    $('#taskInputOne').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskTwo = function() {
    if (localStorage.getItem('task2') !== null) {
        $('#taskInputTwo').addClass('hidden');
        $('#oldTaskTwo').removeClass('hidden');
        var taskTwoText = JSON.parse(localStorage.getItem('task2'));    
        $('#oldTaskTwo').text(taskTwoText);
    } else {
        console.log('Task 2 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputTwo').on('blur', function() {
    $('oldTaskTwo').text(JSON.parse(localStorage.getItem('task2')));
}, loadTaskTwo);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskTwo').on('click', function() {
    $('#oldTaskTwo').addClass('hidden');
    $('#taskInputTwo').removeClass('hidden');
    $('#taskInputTwo').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskThree = function() {
    if (localStorage.getItem('task3') !== null) {
        $('#taskInputThree').addClass('hidden');
        $('#oldTaskThree').removeClass('hidden');
        var taskThreeText = JSON.parse(localStorage.getItem('task3'));    
        $('#oldTaskThree').text(taskThreeText);
    } else {
        console.log('Task 3 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputThree').on('blur', function() {
    $('oldTaskThree').text(JSON.parse(localStorage.getItem('task3')));
}, loadTaskThree);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskThree').on('click', function() {
    $('#oldTaskThree').addClass('hidden');
    $('#taskInputThree').removeClass('hidden');
    $('#taskInputThree').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskFour = function() {
    if (localStorage.getItem('task4') !== null) {
        $('#taskInputFour').addClass('hidden');
        $('#oldTaskFour').removeClass('hidden');
        var taskFourText = JSON.parse(localStorage.getItem('task4'));    
        $('#oldTaskFour').text(taskFourText);
    } else {
        console.log('Task 4 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputFour').on('blur', function() {
    $('oldTaskFour').text(JSON.parse(localStorage.getItem('task4')));
}, loadTaskFour);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskFour').on('click', function() {
    $('#oldTaskFour').addClass('hidden');
    $('#taskInputFour').removeClass('hidden');
    $('#taskInputFour').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskFive = function() {
    if (localStorage.getItem('task5') !== null) {
        $('#taskInputFive').addClass('hidden');
        $('#oldTaskFive').removeClass('hidden');
        var taskFiveText = JSON.parse(localStorage.getItem('task5'));    
        $('#oldTaskFive').text(taskFiveText);
    } else {
        console.log('Task 5 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputFive').on('blur', function() {
    $('oldTaskFive').text(JSON.parse(localStorage.getItem('task5')));
}, loadTaskFive);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskFive').on('click', function() {
    $('#oldTaskFive').addClass('hidden');
    $('#taskInputFive').removeClass('hidden');
    $('#taskInputFive').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskSix = function() {
    if (localStorage.getItem('task6') !== null) {
        $('#taskInputSix').addClass('hidden');
        $('#oldTaskSix').removeClass('hidden');
        var taskSixText = JSON.parse(localStorage.getItem('task6'));    
        $('#oldTaskSix').text(taskSixText);
    } else {
        console.log('Task 6 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputSix').on('blur', function() {
    $('oldTaskSix').text(JSON.parse(localStorage.getItem('task6')));
}, loadTaskSix);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskSix').on('click', function() {
    $('#oldTaskSix').addClass('hidden');
    $('#taskInputSix').removeClass('hidden');
    $('#taskInputSix').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskSeven = function() {
    if (localStorage.getItem('task7') !== null) {
        $('#taskInputSeven').addClass('hidden');
        $('#oldTaskSeven').removeClass('hidden');
        var taskSevenText = JSON.parse(localStorage.getItem('task7'));    
        $('#oldTaskSeven').text(taskSevenText);
    } else {
        console.log('Task 7 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputSeven').on('blur', function() {
    $('oldTaskSeven').text(JSON.parse(localStorage.getItem('task7')));
}, loadTaskSeven);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskSeven').on('click', function() {
    $('#oldTaskSeven').addClass('hidden');
    $('#taskInputSeven').removeClass('hidden');
    $('#taskInputSeven').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskEight = function() {
    if (localStorage.getItem('task8') !== null) {
        $('#taskInputEight').addClass('hidden');
        $('#oldTaskEight').removeClass('hidden');
        var taskEightText = JSON.parse(localStorage.getItem('task8'));    
        $('#oldTaskEight').text(taskEightText);
    } else {
        console.log('Task 8 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputEight').on('blur', function() {
    $('oldTaskEight').text(JSON.parse(localStorage.getItem('task8')));
}, loadTaskEight);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskEight').on('click', function() {
    $('#oldTaskEight').addClass('hidden');
    $('#taskInputEight').removeClass('hidden');
    $('#taskInputEight').trigger('focus');
});

// gets data from local storage, changes out the input element for a p element, and prints the data from local storage to that p element
var loadTaskNine = function() {
    if (localStorage.getItem('task9') !== null) {
        $('#taskInputNine').addClass('hidden');
        $('#oldTaskNine').removeClass('hidden');
        var taskNineText = JSON.parse(localStorage.getItem('task9'));    
        $('#oldTaskNine').text(taskNineText);
    } else {
        console.log('Task 9 data not found')
    }
}

// allows the loading function to work when the page outside of the input field is clicked as well
$('#taskInputNine').on('blur', function() {
    $('oldTaskNine').text(JSON.parse(localStorage.getItem('task9')));
}, loadTaskNine);

// allows user to edit the task by changing the p element back to an input one
$('#oldTaskNine').on('click', function() {
    $('#oldTaskNine').addClass('hidden');
    $('#taskInputNine').removeClass('hidden');
    $('#taskInputNine').trigger('focus');
});

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskOne = function() {
    if ($('#taskInputOne').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputOne')
        .val()
        .trim();

        localStorage.setItem('task1', JSON.stringify(text));
        $('#oldTaskOne').text(text);
        $('#oldTaskOne').removeClass('hidden');
        $('#taskInputOne').addClass('hidden');

        console.log(text);

        loadTaskOne();
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnOne').on('click', saveTaskOne);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskTwo = function() {
    if ($('#taskInputTwo').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputTwo')
        .val()
        .trim();

        localStorage.setItem('task2', JSON.stringify(text));
        $('#oldTaskTwo').text(text);
        $('#oldTaskTwo').removeClass('hidden');
        $('#taskInputTwo').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnTwo').on('click', saveTaskTwo);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskThree = function() {
    if ($('#taskInputThree').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputThree')
        .val()
        .trim();

        localStorage.setItem('task3', JSON.stringify(text));
        $('#oldTaskThree').text(text);
        $('#oldTaskThree').removeClass('hidden');
        $('#taskInputThree').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnThree').on('click', saveTaskThree);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskFour = function() {
    if ($('#taskInputFour').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputFour')
        .val()
        .trim();

        localStorage.setItem('task4', JSON.stringify(text));
        $('#oldTaskFour').text(text);
        $('#oldTaskFour').removeClass('hidden');
        $('#taskInputFour').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnFour').on('click', saveTaskFour);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskFive = function() {
    if ($('#taskInputFive').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputFive')
        .val()
        .trim();

        localStorage.setItem('task5', JSON.stringify(text));
        $('#oldTaskFive').text(text);
        $('#oldTaskFive').removeClass('hidden');
        $('#taskInputFive').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnFive').on('click', saveTaskFive);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskSix = function() {
    if ($('#taskInputSix').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputSix')
        .val()
        .trim();

        localStorage.setItem('task6', JSON.stringify(text));
        $('#oldTaskSix').text(text);
        $('#oldTaskSix').removeClass('hidden');
        $('#taskInputSix').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnSix').on('click', saveTaskSix);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskSeven = function() {
    if ($('#taskInputSeven').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputSeven')
        .val()
        .trim();

        localStorage.setItem('task7', JSON.stringify(text));
        $('#oldTaskSeven').text(text);
        $('#oldTaskSeven').removeClass('hidden');
        $('#taskInputSeven').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnSeven').on('click', saveTaskSeven);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskEight = function() {
    if ($('#taskInputEight').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputEight')
        .val()
        .trim();

        localStorage.setItem('task8', JSON.stringify(text));
        $('#oldTaskEight').text(text);
        $('#oldTaskEight').removeClass('hidden');
        $('#taskInputEight').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnEight').on('click', saveTaskEight);

// checks that a non-empty value has been input by the user, saves that value to localstorage, then converts the input element to a p element
var saveTaskNine = function() {
    if ($('#taskInputNine').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputNine')
        .val()
        .trim();

        localStorage.setItem('task9', JSON.stringify(text));
        $('#oldTaskNine').text(text);
        $('#oldTaskNine').removeClass('hidden');
        $('#taskInputNine').addClass('hidden');

        console.log(text);
    }
}

// event listener for when the save button is cicked for this particular timeblock
$('#saveBtnNine').on('click', saveTaskNine);

// function to change the background color for each timeblock based on comparing that block's indicated time with the current time, found via moment.js
var auditTasks = function() {
    var time = moment().format('HH');

    if (time === $('.hr-1').text()) {
        $('#taskInputOne').removeClass('past');
        $('#taskInputOne').addClass('present');
        $('#firstHr').removeClass('past');
        $('#firstHr').addClass('present');
    } else if ($('.hr-1').text() > time) {
        $('#taskInputOne').removeClass('past');
        $('#taskInputOne').addClass('future');
        $('#firstHr').removeClass('past');
        $('#firstHr').addClass('future');
    }

    if (time === $('.hr-2').text()) {
        $('#taskInputTwo').removeClass('past');
        $('#taskInputTwo').addClass('present');
        $('#secondHr').removeClass('past');
        $('#secondHr').addClass('present');
    } else if ($('.hr-2').text() > time) {
        $('#taskInputTwo').removeClass('past');
        $('#taskInputTwo').addClass('future');
        $('#secondHr').removeClass('past');
        $('#secondHr').addClass('future');
    }

    if (time === $('.hr-3').text()) {
        $('#taskInputThree').removeClass('past');
        $('#taskInputThree').addClass('present');
        $('#thirdHr').removeClass('past');
        $('#thirdHr').addClass('present');
    } else if ($('.hr-3').text() > time) {
        $('#taskInputThree').removeClass('past');
        $('#taskInputThree').addClass('future');
        $('#thirdHr').removeClass('past');
        $('#thirdHr').addClass('future');
    }

    if (time === $('.hr-4').text()) {
        $('#taskInputFour').removeClass('past');
        $('#taskInputFour').addClass('present');
        $('#fourthHr').removeClass('past');
        $('#fourthHr').addClass('present');
    } else if ($('.hr-4').text() > time) {
        $('#taskInputFour').removeClass('past');
        $('#taskInputFour').addClass('future');
        $('#fourthHr').removeClass('past');
        $('#fourthHr').addClass('future');
    }

    if (time === $('.hr-5').text()) {
        $('#taskInputFive').removeClass('past');
        $('#taskInputFive').addClass('present');
        $('#fifthHr').removeClass('past');
        $('#fifthHr').addClass('present');
    } else if ($('.hr-5').text() > time) {
        $('#taskInputFive').removeClass('past');
        $('#taskInputFive').addClass('future');
        $('#fifthHr').removeClass('past');
        $('#fifthHr').addClass('future');
    }

    if (time === $('.hr-6').text()) {
        $('#taskInputSix').removeClass('past');
        $('#taskInputSix').addClass('present');
        $('#sixthHr').removeClass('past');
        $('#sixthHr').addClass('present');
    } else if ($('.hr-6').text() > time) {
        $('#taskInputSix').removeClass('past');
        $('#taskInputSix').addClass('future');
        $('#sixthHr').removeClass('past');
        $('#sixthHr').addClass('future');
    }

    if (time === $('.hr-7').text()) {
        $('#taskInputSeven').removeClass('past');
        $('#taskInputSeven').addClass('present');
        $('#seventhHr').removeClass('past');
        $('#seventhHr').addClass('present');
    } else if ($('.hr-7').text() > time) {
        $('#taskInputSeven').removeClass('past');
        $('#taskInputSeven').addClass('future');
        $('#seventhHr').removeClass('past');
        $('#seventhHr').addClass('future');
    }

    if (time === $('.hr-8').text()) {
        $('#taskInputEight').removeClass('past');
        $('#taskInputEight').addClass('present');
        $('#eigthHr').removeClass('past');
        $('#eigthHr').addClass('present');
    } else if ($('.hr-8').text() > time) {
        $('#taskInputEight').removeClass('past');
        $('#taskInputEight').addClass('future');
        $('#eigthHr').removeClass('past');
        $('#eigthHr').addClass('future');
    }

    if (time === $('.hr-9').text()) {
        $('#taskInputNine').removeClass('past');
        $('#taskInputNine').addClass('present');
        $('#ninthHr').removeClass('past');
        $('#ninthHr').addClass('present');
    } else if ($('.hr-9').text() > time) {
        $('#taskInputNine').removeClass('past');
        $('#taskInputNine').addClass('future');
        $('#ninthHr').removeClass('past');
        $('#ninthHr').addClass('future');
    }
}

// function to re-run the auditTasks function every 30 minutes
setInterval(auditTasks(), 1800000);