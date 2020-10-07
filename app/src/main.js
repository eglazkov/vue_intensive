const $ = require("jquery");

const getPagesList = () => {
    $.get('./api', (data) => {
        data.forEach(file => {
            $("body").append(`<h1>${file}</h1>`);
        });
    }, "JSON");
};

getPagesList();

$(".create").click(() => {
    $("h1").remove();
    $.post("./api/createNewHtmlPage.php", {
        name: $("input").val()
    }, (data) => {
        getPagesList();
    })
    .fail(() => {
        alert("Такая страница уже существует!")
    });
});

$(".remove").click(() => {
    $("h1").remove();
    $.post("./api/removeHtmlPage.php", {
        name: $("input").val()
    }, (data) => {
        getPagesList();
    })
    .fail(() => {
        alert(`Страница ${$("input").val()}.html не найдена!`);
        getPagesList();
    });
});