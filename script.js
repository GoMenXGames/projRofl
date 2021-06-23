let body = document.body;
let lastTime = Date.now();
let inputString = "";
let rightString = "kosmen21"
let title = document.querySelector(".title");

body.onkeydown = handle;

function handle(e) {
    console.log("Вы нажали на клавиатуру!");


    if (Date.now() - lastTime > 1000) {
        console.log("Reset! (" + parseInt(Date.now()) - lastTime)
        inputString = "";
    }

    let text = e.key;

    inputString += text;

    if (inputString === rightString) {
        console.log("Правельно!!!");
        document.body.classList.add("image");
        title.innerText = "Kosmen21";
        setTimeout(document.location.href = "http://kosmen21.github.io",1000);
    }
    else {
        title.innerText = "Факуй";
        document.body.classList.remove("image");
    }
    lastTime = Date.now();
}