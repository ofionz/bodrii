// function([string1, string2],target id,[color1,color2])

startAnimateTable();
function startAnimateTable() {

    let tables = Array.from(document.querySelectorAll("[id^='content-']"));
    tables.forEach(function (table) {
            let tableNodes = Array.from(table.childNodes).filter(elem => elem.tagName);
            Loop(tableNodes);
        }
    );

    function Loop(arr) {
        setTimeout(function () {
            arr.forEach(function (elem) {
                elem.classList.remove("pulse");
            });
            arr[Math.trunc(Math.floor(Math.random() * arr.length))].classList.add("pulse");
            Loop(arr);
        }, 6500)
    }
}


new TypeIt('#text', {
    speed: 180,
    loop: true,
    cursor: false
})
    .type("Интеграция")
    .pause(1500)
    .delete(10)
    .type("Разработка")
    .pause(1500)
    .delete(10)
    .type("Автоматизация")
    .pause(1500)
    .delete(13)
    .type("Обучение")
    .pause(1500)
    .delete(8)
    .type("Поддержка")
    .pause(1500)
    .delete(9)
    .go();



// var card = document.querySelector('.card');
// card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
// });



