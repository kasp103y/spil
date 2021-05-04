let points;
let liv;
let randomPos;
let speed;
let delay;
const vandcontainer1 = document.querySelector("#vand_container");
const vandcontainer2 = document.querySelector("#vand_container2");
const ildcontainer = document.querySelector("#ild_container");
const ildcontainer2 = document.querySelector("#ild_container2");
const syrecontainer = document.querySelector("#syre_container");
const syrecontainer2 = document.querySelector("#syre_container2");
const bombecontainer = document.querySelector("#bombe_container");
const bombecontainer2 = document.querySelector("#bombe_container2");
const soundSwitch = document.querySelector("#options_container");

const time = document.querySelector("#time_board_sprite");
const gameover = document.querySelector("#game_over");
const win = document.querySelector("#level_complete");
const startKnap = document.querySelector("#start_knap_sprite");
const infoBoks = document.querySelector("#info_boks");
const infoKnap = document.querySelector("#info_knap");
const scoreBoard = document.querySelector("#score_board_sprite")

const liv1 = document.querySelector("#liv1");
const liv2 = document.querySelector("#liv2");
const liv3 = document.querySelector("#liv3");
const vandLyd = document.querySelector("#vand_lyd");
const syreLyd = document.querySelector("#syre_lyd");
const ildLyd = document.querySelector("#ild_lyd");
const bombeLyd = document.querySelector("#bombe_lyd");
const baggrundMusik = document.querySelector("#baggrund_musik");

window.addEventListener("load", sidenVises);

function sidenVises() {
    startKnap.classList.add("pulse");
    startKnap.addEventListener("click", infoVises);
    gameover.classList.add("hidden");
    win.classList.add("hidden");
    infoBoks.classList.add("hidden");
    //unmute lyd
    soundUnmute();
}

function soundUnmute() {
    console.log("soundUnmute");
    soundSwitch.removeEventListener("click", soundUnmute);

    //skift til "ikke muted" - billede
    soundSwitch.classList.add("unmute");

    //unmute al lyd
    vandLyd.muted = false;
    bombeLyd.muted = false;
    syreLyd.muted = false;
    ildLyd.muted = false;
    baggrundMusik.muted = false;

    soundSwitch.addEventListener("click", soundMute);
}

function soundMute() {
    console.log("soundMute");
    soundSwitch.removeEventListener("click", soundMute);

    //skift til "ikke muted" - billede
    soundSwitch.classList = "";

    //unmute al lyd
    vandLyd.muted = true;
    bombeLyd.muted = true;
    syreLyd.muted = true;
    ildLyd.muted = true;
    baggrundMusik.muted = true;


    soundSwitch.addEventListener("click", soundUnmute);
}

function infoVises() {
    console.log("info");
    infoBoks.classList.remove("hidden");
    infoKnap.classList.add("pulse");
    infoKnap.addEventListener("click", startGame);

}

function startGame() {

    console.log("startGame");
    baggrundMusik.volume = 0.5;
    baggrundMusik.loop = true;
    baggrundMusik.play();
    //Gemmer start skærm
    document.querySelector("#start").classList.add("hidden");
    gameover.classList.add("hidden");
    win.classList.add("hidden");
    infoBoks.classList.add("hidden");

    //Reset variabler
    points = 0;
    scoreBoard.textContent = points;

    liv = 3;
    liv1.classList.remove("hide");
    liv2.classList.remove("hide");
    liv3.classList.remove("hide");
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
    vandcontainer1.addEventListener("animationiteration", vandForsvind);
    vandcontainer2.addEventListener("animationiteration", vandForsvind);
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

    vandLyd.currentTime = 0;
    vandLyd.play();

    points++;
    scoreBoard.textContent = points;
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
    console.log("liv =" + liv);

    ildLyd.currentTime = 0;
    ildLyd.play();

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

    this.firstElementChild.classList.add("bombe");
    bombeLyd.currentTime = 0;
    bombeLyd.play();
    this.removeEventListener("mousedown", clickBombeHandler);

    console.log("liv =" + liv)

    document.querySelector("#liv" + liv).classList.add("hide");

    this.classList.add("frys");
    this.addEventListener("animationend", bombeReset);
    liv -= 3;

    console.log("liv er nu =" + liv)
    if (liv <= 0) {
        console.log("liv <= 0");
        this.addEventListener("animationend", stopSpillet);

    }
}

function bombeReset() {
    console.log("bombeReset");
    this.classList = "";
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", ildReset);
    this.offsetHeight;
    //Ny pos til bombe
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
    this.firstElementChild.classList.add("splat_syre");
    syreLyd.currentTime = 0;
    syreLyd.play();
    points--;
    scoreBoard.textContent = points;
    this.classList.add("frys");
    this.addEventListener("animationend", syreReset);


}

function syreReset() {
    console.log("syreReset");
    this.classList = "";
    this.firstElementChild.classList = "";
    this.removeEventListener("animationend", syreReset);
    this.offsetHeight;

    //ny pos til syre
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);


    this.classList.add("pos" + randomPos, "fald");

    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    this.classList.add("speed" + speed);
    this.addEventListener("mousedown", clickSyreHandler);


}

//mist liv på vand rammer bund
function vandForsvind() {
    console.log("vandForsvind");
    this.classList = "";
    this.firstElementChild.classList = "";
    //this.removeEventListener("animationiteration", vandForsvind);
    this.offsetHeight;

    console.log("liv =" + liv)


    document.querySelector("#liv" + liv).classList.add("hide");
    liv--;
    console.log("liv er nu =" + liv)


    //ny pos til vand
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);


    this.classList.add("pos" + randomPos, "fald");

    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);

    this.classList.add("speed" + speed);
    this.addEventListener("mousedown", clickVandHandler);

    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();
    }


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
    baggrundMusik.pause();



    if (liv <= 0) {
        gameOver();
    } else if (points >= 10) {
        levelComplete();
    } else {
        gameOver();
    }
}

function gameOver() {
    console.log("gameOver");
    gameover.classList = "";
    document.querySelector("#ui_dead_redo").classList.add("pulse");
    document.querySelector("#ui_dead_redo").addEventListener("click", startGame);
    document.querySelector("#ui_dead_hjem").classList.add("pulse");
    document.querySelector("#ui_dead_hjem").addEventListener("click", sidenVises);
    document.querySelector("#dead_game_points").textContent = "You suck, you should try again. " + points + " points"


}

function levelComplete() {
    console.log("levelComplete");
    win.classList = "";
    document.querySelector("#ui_win_redo").classList.add("pulse");
    document.querySelector("#ui_win_redo").addEventListener("click", startGame);
    document.querySelector("#ui_win_hjem").classList.add("pulse");
    document.querySelector("#ui_win_hjem").addEventListener("click", sidenVises);
    document.querySelector("#lvl_game_points").textContent = "you are the best. But you could be better. Try again. " + points + " points"
}
