var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do YYYY"));
var currentHour = parseInt(moment().format('H'));
var trEl = $(".time-table");


function getCurrentHour() {

    for (var i = 0; i < trEl.length; i++) {
        var trElementId = trEl[i].id;
        var maninipTr = document.getElementById(trEl[i].id);


        $(trEl[i].id).removeClass(".past .present .future");

        if (trElementId < currentHour) {
            $(maninipTr).addClass("past");
        } else if (trElementId > currentHour) {
            $(maninipTr).addClass("future");
        } else {
            $(maninipTr).addClass("present");
        }
    }
};

function nineAM() {
    var input_text = document.getElementById("task9");
    var output_div = document.getElementById("task9");
    var save_button = document.getElementById("save9");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task9");
    input_text.value = localStorage.getItem("task9");

    function updateOutput() {
        localStorage.setItem("task9", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function tenAM() {
    var input_text = document.getElementById("task10");
    var output_div = document.getElementById("task10");
    var save_button = document.getElementById("save10");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task10");
    input_text.value = localStorage.getItem("task10");

    function updateOutput() {
        localStorage.setItem("task10", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function elevenAM() {
    var input_text = document.getElementById("task11");
    var output_div = document.getElementById("task11");
    var save_button = document.getElementById("save11");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task11");
    input_text.value = localStorage.getItem("task11");

    function updateOutput() {
        localStorage.setItem("task11", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function twelveNoon() {
    var input_text = document.getElementById("task12");
    var output_div = document.getElementById("task12");
    var save_button = document.getElementById("save12");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task12");
    input_text.value = localStorage.getItem("task12");

    function updateOutput() {
        localStorage.setItem("task12", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function onePM() {
    var input_text = document.getElementById("task13");
    var output_div = document.getElementById("task13");
    var save_button = document.getElementById("save13");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task13");
    input_text.value = localStorage.getItem("task13");

    function updateOutput() {
        localStorage.setItem("task13", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function twoPM() {
    var input_text = document.getElementById("task14");
    var output_div = document.getElementById("task14");
    var save_button = document.getElementById("save14");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task14");
    input_text.value = localStorage.getItem("task14");

    function updateOutput() {
        localStorage.setItem("task14", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function threePM() {
    var input_text = document.getElementById("task15");
    var output_div = document.getElementById("task15");
    var save_button = document.getElementById("save15");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task15");
    input_text.value = localStorage.getItem("task15");

    function updateOutput() {
        localStorage.setItem("task15", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function fourPM() {
    var input_text = document.getElementById("task16");
    var output_div = document.getElementById("task16");
    var save_button = document.getElementById("save16");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task16");
    input_text.value = localStorage.getItem("task16");

    function updateOutput() {
        localStorage.setItem("task16", input_text.value);
        output_div.textContent = input_text.value;
    }
};

function fivePM() {
    var input_text = document.getElementById("task17");
    var output_div = document.getElementById("task17");
    var save_button = document.getElementById("save17");

    save_button.addEventListener("click", updateOutput);

    output_div.textContent = localStorage.getItem("task17");
    input_text.value = localStorage.getItem("task17");

    function updateOutput() {
        localStorage.setItem("task17", input_text.value);
        output_div.textContent = input_text.value;
    }
};

nineAM();
tenAM();
elevenAM();
twelveNoon();
onePM();
twoPM();
threePM();
fourPM();
fivePM();
getCurrentHour();