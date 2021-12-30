var currentDate = function() {
    var date = moment().format("dddd, MMMM Do");

    console.log(date);

    $('#currentDay').append(date);
}

var saveTaskOne = function() {
    if ($('#taskInputOne').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputOne')
        .val()
        .trim();

        localStorage.setItem('task1', JSON.stringify(text));
        $('#oldTaskOne').text(text);

        console.log(text);
    }
}

$('#saveBtnOne').on('click', saveTaskOne);

var saveTaskTwo = function() {
    if ($('#taskInputTwo').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputTwo')
        .val()
        .trim();

        localStorage.setItem('task2', JSON.stringify(text));
        $('#oldTaskTwo').text(text);

        console.log(text);
    }
}

$('#saveBtnTwo').on('click', saveTaskTwo);

var saveTaskThree = function() {
    if ($('#taskInputThree').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputThree')
        .val()
        .trim();

        localStorage.setItem('task3', JSON.stringify(text));
        $('#oldTaskThree').text(text);

        console.log(text);
    }
}

$('#saveBtnThree').on('click', saveTaskThree);

var saveTaskFour = function() {
    if ($('#taskInputFour').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputFour')
        .val()
        .trim();

        localStorage.setItem('task4', JSON.stringify(text));
        $('#oldTaskFour').text(text);

        console.log(text);
    }
}

$('#saveBtnFour').on('click', saveTaskFour);

var saveTaskFive = function() {
    if ($('#taskInputFive').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputFive')
        .val()
        .trim();

        localStorage.setItem('task5', JSON.stringify(text));
        $('#oldTaskFive').text(text);

        console.log(text);
    }
}

$('#saveBtnFive').on('click', saveTaskFive);

var saveTaskSix = function() {
    if ($('#taskInputSix').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputSix')
        .val()
        .trim();

        localStorage.setItem('task6', JSON.stringify(text));
        $('#oldTaskSix').text(text);

        console.log(text);
    }
}

$('#saveBtnSix').on('click', saveTaskSix);

var saveTaskSeven = function() {
    if ($('#taskInputSeven').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputSeven')
        .val()
        .trim();

        localStorage.setItem('task7', JSON.stringify(text));
        $('#oldTaskSeven').text(text);

        console.log(text);
    }
}

$('#saveBtnSeven').on('click', saveTaskSeven);

var saveTaskEight = function() {
    if ($('#taskInputEight').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputEight')
        .val()
        .trim();

        localStorage.setItem('task8', JSON.stringify(text));
        $('#oldTaskEight').text(text);

        console.log(text);
    }
}

$('#saveBtnEight').on('click', saveTaskEight);

var saveTaskNine = function() {
    if ($('#taskInputNine').val() === "") {
        var text = this;
    } else {
        var text = $('#taskInputNine')
        .val()
        .trim();

        localStorage.setItem('task9', JSON.stringify(text));
        $('#oldTaskNine').text(text);

        console.log(text);
    }
}

$('#saveBtnNine').on('click', saveTaskNine);

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

$('#taskInputOne').on('blur', function() {
    $('oldTaskOne').text(JSON.parse(localStorage.getItem('task1')));
}, loadTaskOne);

$('#oldTaskOne').on('click', function() {
    $('#oldTaskOne').addClass('hidden');
    $('#taskInputOne').removeClass('hidden');
    $('#taskInputOne').trigger('focus');
    saveTaskOne();
});

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

$('#taskInputTwo').on('blur', function() {
    $('oldTaskTwo').text(JSON.parse(localStorage.getItem('task2')));
}, loadTaskTwo);

$('#oldTaskTwo').on('click', function() {
    $('#oldTaskTwo').addClass('hidden');
    $('#taskInputTwo').removeClass('hidden');
    $('#taskInputTwo').trigger('focus');
    saveTaskTwo();
});

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

$('#taskInputThree').on('blur', function() {
    $('oldTaskThree').text(JSON.parse(localStorage.getItem('task3')));
}, loadTaskThree);

$('#oldTaskThree').on('click', function() {
    $('#oldTaskThree').addClass('hidden');
    $('#taskInputThree').removeClass('hidden');
    $('#taskInputThree').trigger('focus');
    saveTaskThree();
});

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

$('#taskInputFour').on('blur', function() {
    $('oldTaskFour').text(JSON.parse(localStorage.getItem('task4')));
}, loadTaskFour);

$('#oldTaskFour').on('click', function() {
    $('#oldTaskFour').addClass('hidden');
    $('#taskInputFour').removeClass('hidden');
    $('#taskInputFour').trigger('focus');
    saveTaskFour();
});

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

$('#taskInputFive').on('blur', function() {
    $('oldTaskFive').text(JSON.parse(localStorage.getItem('task5')));
}, loadTaskFive);

$('#oldTaskFive').on('click', function() {
    $('#oldTaskFive').addClass('hidden');
    $('#taskInputFive').removeClass('hidden');
    $('#taskInputFive').trigger('focus');
    saveTaskFive();
});

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

$('#taskInputSix').on('blur', function() {
    $('oldTaskSix').text(JSON.parse(localStorage.getItem('task6')));
}, loadTaskSix);

$('#oldTaskSix').on('click', function() {
    $('#oldTaskSix').addClass('hidden');
    $('#taskInputSix').removeClass('hidden');
    $('#taskInputSix').trigger('focus');
    saveTaskSix();
});

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

$('#taskInputSeven').on('blur', function() {
    $('oldTaskSeven').text(JSON.parse(localStorage.getItem('task7')));
}, loadTaskSeven);

$('#oldTaskSeven').on('click', function() {
    $('#oldTaskSeven').addClass('hidden');
    $('#taskInputSeven').removeClass('hidden');
    $('#taskInputSeven').trigger('focus');
    saveTaskSeven();
});

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

$('#taskInputEight').on('blur', function() {
    $('oldTaskEight').text(JSON.parse(localStorage.getItem('task8')));
}, loadTaskEight);

$('#oldTaskEight').on('click', function() {
    $('#oldTaskEight').addClass('hidden');
    $('#taskInputEight').removeClass('hidden');
    $('#taskInputEight').trigger('focus');
    saveTaskEight();
});

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

$('#taskInputNine').on('blur', function() {
    $('oldTaskNine').text(JSON.parse(localStorage.getItem('task9')));
}, loadTaskNine);

$('#oldTaskNine').on('click', function() {
    $('#oldTaskNine').addClass('hidden');
    $('#taskInputNine').removeClass('hidden');
    $('#taskInputNine').trigger('focus');
    saveTaskNine();
});