let points;
let liv;
let randomPos;
let speed;
let delay;
const vandcontainer1 = document.querySelector("#vand_container")
const ildcontainer = document.querySelector("#ild_container")
const syrecontainer = document.querySelector("#syre_container")
const bombecontainer = document.querySelector("#bombe_container")
const vandcontainer2 = document.querySelector("#vand_container2")
const ildcontainer2 = document.querySelector("#ild_container2")
const syrecontainer2 = document.querySelector("#syre_container2")
const bombecontainer2 = document.querySelector("#bombe_container2")
const time = document.querySelector("#time_board_sprite")

window.addEventListener("load", sidenVises);

function sidenVises() {
    document.querySelector("#start_knap_sprite").classList.add("pulse");
    document.querySelector("#start_knap_sprite").addEventListener("click", startGame);


}

function startGame() {

    console.log("startGame");
    //Gemmer start skærm
    document.querySelector("#start").classList.add("hidden");

    //Reset variabler
    points = 0;
    document.querySelector("#score_board_sprite").innerHTML = points;

    liv = 3;

    speed = 0;

    delay = 1;
    //Starter tid
    time.classList.add("time");

    //Position til container
    vandcontainer1.classList.add("pos1", "fald", "speed1");
    vandcontainer2.classList.add("pos2", "delay2", "fald", "speed2");
    ildcontainer.classList.add("pos3", "delay3", "fald", "speed3");
    bombecontainer.classList.add("pos4", "delay2", "fald", "speed4");
    syrecontainer.classList.add("pos5", "delay4", "fald", "speed5");
    ildcontainer2.classList.add("pos3", "delay3", "fald", "speed3");
    bombecontainer2.classList.add("pos4", "delay2", "fald", "speed4");
    syrecontainer2.classList.add("pos5", "delay4", "fald", "speed5");

    //Lyt efter klik på object
    vandcontainer1.addEventListener("mousedown", clickVandHandler);
    vandcontainer2.addEventListener("mousedown", clickVandHandler);
    ildcontainer.addEventListener("mousedown", clickIldHandler);
    bombecontainer.addEventListener("mousedown", clickBombeHandler);
    syrecontainer.addEventListener("mousedown", clickSyreHandler);
    ildcontainer2.addEventListener("mousedown", clickIldHandler);
    bombecontainer2.addEventListener("mousedown", clickBombeHandler);
    syrecontainer2.addEventListener("mousedown", clickSyreHandler);

    //Lyt efter færdig animation
    ildcontainer.addEventListener("animationiteration", ildReset);
    ildcontainer2.addEventListener("animationiteration", ildReset);
    vandcontainer1.addEventListener("animationiteration", vandReset);
    vandcontainer2.addEventListener("animationiteration", vandReset);
    bombecontainer.addEventListener("animationiteration", bombeReset);
    syrecontainer.addEventListener("animationiteration", syreReset);
    bombecontainer2.addEventListener("animationiteration", bombeReset);
    syrecontainer2.addEventListener("animationiteration", syreReset);

    //Stopper spil hvis tid slut
    time.addEventListener("animationend", stopSpillet);

}

function clickVandHandler() {
    console.log("clickVandhandler");

    this.removeEventListener("mousedown", clickVandHandler);
    this.firstElementChild.classList.add("splat_vand");
    points++;
    document.querySelector("#score_board_sprite").innerHTML = points;
    this.classList.add("frys");
    this.addEventListener("animationend", vandReset);

}

function vandReset() {
    console.log("vandReset");
    this.classList = "";
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", vandReset);
    this.offsetHeight;

    //ny pos til vand
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);


    this.classList.add("pos" + randomPos, "fald");

    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    this.classList.add("speed" + speed);
    this.addEventListener("mousedown", clickVandHandler);


}


function clickIldHandler() {
    console.log("clickIldhandler");

    this.removeEventListener("mousedown", clickIldHandler);
    this.firstElementChild.classList.add("skaler");
    console.log("liv =" + liv)

    document.querySelector("#liv" + liv).classList.add("hide");

    liv--;

    console.log("liv er nu =" + liv)

    this.classList.add("frys");
    this.addEventListener("animationend", ildReset);

    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();
    }
}

function ildReset() {
    console.log("ildReset");
    this.classList = "";
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", ildReset);
    this.offsetHeight;
    //Ny pos til ild
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);
    this.classList.add("pos" + randomPos, "fald");
    //Random speed
    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    this.classList.add("speed" + speed);
    this.addEventListener("mousedown", clickIldHandler);


}

function clickBombeHandler() {
    console.log("clickBombehandler");

    this.removeEventListener("mousedown", clickBombeHandler);
    this.firstElementChild.classList.add("skaler");
    console.log("liv =" + liv)

    document.querySelector("#liv" + liv).classList.add("hide");

    liv -= 3;

    console.log("liv er nu =" + liv)

    this.classList.add("frys");
    this.addEventListener("animationend", bombeReset);

    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();
    }
}

function bombeReset() {
    console.log("bombeReset");
    this.classList = "";
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", ildReset);
    this.offsetHeight;
    //Ny pos til ild
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);
    this.classList.add("pos" + randomPos, "fald");
    //Random speed
    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    this.classList.add("speed" + speed);
    this.addEventListener("mousedown", clickBombeHandler);


}

function clickSyreHandler() {
    console.log("clickSyrehandler");

    this.removeEventListener("mousedown", clickSyreHandler);
    this.firstElementChild.classList.add("splat_vand");
    points--;
    document.querySelector("#score_board_sprite").innerHTML = points;
    this.classList.add("frys");
    this.addEventListener("animationend", syreReset);

}

function syreReset() {
    console.log("syreReset");
    this.classList = "";
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", syreReset);
    this.offsetHeight;

    //ny pos til vand
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);


    this.classList.add("pos" + randomPos, "fald");

    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    this.classList.add("speed" + speed);
    this.addEventListener("mousedown", clickSyreHandler);


}

function ildForsvind() {
    console.log("ildForsvind");
}

//mist liv på vand rammer bund
function vandForsvind() {
    console.log("vandForsvind");
}

function bombeForsvind() {
    console.log("bombeForsvind");
}

function syreForsvind() {
    console.log("syreForsvind");
}

function stopSpillet() {
    console.log("stopSpillet");
    ildcontainer.classList = "";
    ildcontainer.firstElementChild.classList = "";
    ildcontainer2.classList = "";
    ildcontainer2.firstElementChild.classList = "";
    vandcontainer1.classList = "";
    vandcontainer1.firstElementChild.classList = "";
    vandcontainer2.classList = "";
    vandcontainer2.firstElementChild.classList = "";
    bombecontainer.classList = "";
    bombecontainer.firstElementChild.classList = "";
    bombecontainer2.classList = "";
    bombecontainer2.firstElementChild.classList = "";
    syrecontainer.classList = "";
    syrecontainer.firstElementChild.classList = "";
    syrecontainer2.classList = "";
    syrecontainer2.firstElementChild.classList = "";
    document.querySelector("#time_board_sprite").classList = "";
    //Remove eventlistener
    vandcontainer1.removeEventListener("mousedown", clickVandHandler);
    vandcontainer2.removeEventListener("mousedown", clickVandHandler);
    ildcontainer.removeEventListener("mousedown", clickIldHandler);
    bombecontainer.removeEventListener("mousedown", clickBombeHandler);
    syrecontainer.removeEventListener("mousedown", clickSyreHandler);
    ildcontainer2.removeEventListener("mousedown", clickIldHandler);
    bombecontainer2.removeEventListener("mousedown", clickBombeHandler);
    syrecontainer2.removeEventListener("mousedown", clickSyreHandler);

    //Lyt efter færdig animation
    ildcontainer.removeEventListener("animationiteration", ildReset);
    ildcontainer2.removeEventListener("animationiteration", ildReset);
    vandcontainer1.removeEventListener("animationiteration", vandReset);
    vandcontainer2.removeEventListener("animationiteration", vandReset);
    bombecontainer.removeEventListener("animationiteration", bombeReset);
    syrecontainer.removeEventListener("animationiteration", syreReset);
    bombecontainer2.removeEventListener("animationiteration", bombeReset);
    syrecontainer2.removeEventListener("animationiteration", syreReset);

    //Stopper spil hvis tid slut
    time.removeEventListener("animationend", stopSpillet);



    if (liv <= 0) {
        gameOver();
    } else if (points >= 10) {
        levelComplete();
    } else {
        gameOver();
    }
}

function gameOver() {
    console.log("gameOver")
}

function levelComplete() {
    console.log("levelComplete")
}
