let points;
let liv;
let randomPos;
let speed;
let delay;

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

    speed = 3;

    delay = 1;
    //Starter tid
    document.querySelector("#time_board_sprite").classList.add("time");

    //Position til container
    document.querySelector("#vand_container").classList.add("pos1", "fald");
    document.querySelector("#vand_container2").classList.add("pos2", "delay2", "fald");
    document.querySelector("#ild_container").classList.add("pos3", "delay3", "fald");
    document.querySelector("#bombe_container").classList.add("pos4", "delay2", "fald");
    document.querySelector("#syre_container").classList.add("pos5", "delay4", "fald");

    //Lyt efter klik på object
    document.querySelector("#vand_container").addEventListener("mousedown", clickVandHandler);
    document.querySelector("#vand_container2").addEventListener("mousedown", clickVand2Handler);
    document.querySelector("#ild_container").addEventListener("mousedown", clickIldHandler);
    document.querySelector("#bombe_container").addEventListener("mousedown", clickBombeHandler);
    document.querySelector("#syre_container").addEventListener("mousedown", clickSyreHandler);

    //Lyt efter færdig animation
    document.querySelector("#ild_container").addEventListener("animationiteration", ildReset);
    document.querySelector("#vand_container").addEventListener("animationiteration", vandReset);
    document.querySelector("#vand_container2").addEventListener("animationiteration", vandReset2);
    document.querySelector("#bombe_container").addEventListener("animationiteration", bombeReset);
    document.querySelector("#syre_container").addEventListener("animationiteration", syreReset);

    //Stopper spil hvis tid slut
    document.querySelector("#time_board_sprite").addEventListener("animationend", stopSpillet);

}

function clickVandHandler() {
    console.log("clickVandhandler");

    document.querySelector("#vand_container").removeEventListener("mousedown", clickVandHandler);
    document.querySelector("#vand_sprite").classList.add("splat_vand");
    points++;
    document.querySelector("#score_board_sprite").innerHTML = points;
    document.querySelector("#vand_container").classList.add("frys");
    document.querySelector("#vand_container").addEventListener("animationend", vandReset);

}

function vandReset() {
    console.log("vandReset");
    document.querySelector("#vand_container").classList = "";
    document.querySelector("#vand_sprite").classList = "";
    document.querySelector("#vand_container").removeEventListener("animationend", vandReset);
    document.querySelector("#vand_container").offsetHeight;

    //ny pos til vand
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);


    document.querySelector("#vand_container").classList.add("pos" + randomPos, "fald");

    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    document.querySelector("#vand_container").classList.add("speed" + speed);
    document.querySelector("#vand_container").addEventListener("mousedown", clickVandHandler);


}

function clickVand2Handler() {
    console.log("clickVandhandler");

    document.querySelector("#vand_container2").removeEventListener("mousedown", clickVandHandler);
    document.querySelector("#vand_sprite2").classList.add("splat_vand");
    points++;
    document.querySelector("#score_board_sprite").innerHTML = points;
    document.querySelector("#vand_container2").classList.add("frys");
    document.querySelector("#vand_container2").addEventListener("animationend", vandReset2);

}

function vandReset2() {
    console.log("vandReset");
    document.querySelector("#vand_container2").classList = "";
    document.querySelector("#vand_sprite2").classList = "";
    document.querySelector("#vand_container2").removeEventListener("animationend", vandReset2);
    document.querySelector("#vand_container2").offsetHeight;

    //Ny pos til vand
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);


    document.querySelector("#vand_container2").classList.add("pos" + randomPos, "fald");
    //Random speed
    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    document.querySelector("#vand_container2").classList.add("speed" + speed);
    document.querySelector("#vand_container2").addEventListener("mousedown", clickVandHandler);


}

function clickIldHandler() {
    console.log("clickIldhandler");

    document.querySelector("#ild_container").removeEventListener("mousedown", clickIldHandler);
    document.querySelector("#ild_sprite").classList.add("skaler");
    console.log("liv =" + liv)

    document.querySelector("#liv" + liv).classList.add("hide");

    liv--;

    console.log("liv er nu =" + liv)

    document.querySelector("#ild_container").classList.add("frys");
    document.querySelector("#ild_container").addEventListener("animationend", ildReset);

    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();
    }
}

function ildReset() {
    console.log("ildReset");
    document.querySelector("#ild_container").classList = "";
    document.querySelector("#ild_sprite").classList = "";
    document.querySelector("#ild_container").removeEventListener("animationend", ildReset);
    document.querySelector("#ild_container").offsetHeight;
    //Ny pos til ild
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);
    document.querySelector("#ild_container").classList.add("pos" + randomPos, "fald");
    //Random speed
    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    document.querySelector("#ild_container").classList.add("speed" + speed);
    document.querySelector("#ild_container").addEventListener("mousedown", clickIldHandler);


}

function clickBombeHandler() {
    console.log("clickBombehandler");

    document.querySelector("#bombe_container").removeEventListener("mousedown", clickBombeHandler);
    document.querySelector("#bombe_sprite").classList.add("skaler");
    console.log("liv =" + liv)

    document.querySelector("#liv" + liv).classList.add("hide");

    liv -= 3;

    console.log("liv er nu =" + liv)

    document.querySelector("#bombe_container").classList.add("frys");
    document.querySelector("#bombe_container").addEventListener("animationend", bombeReset);

    if (liv <= 0) {
        console.log("liv <= 0");
        stopSpillet();
    }
}

function bombeReset() {
    console.log("bombeReset");
    document.querySelector("#bombe_container").classList = "";
    document.querySelector("#bombe_sprite").classList = "";
    document.querySelector("#bombe_container").removeEventListener("animationend", ildReset);
    document.querySelector("#bombe_container").offsetHeight;
    //Ny pos til ild
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);
    document.querySelector("#bombe_container").classList.add("pos" + randomPos, "fald");
    //Random speed
    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    document.querySelector("#bombe_container").classList.add("speed" + speed);
    document.querySelector("#bombe_container").addEventListener("mousedown", clickBombeHandler);


}

function clickSyreHandler() {
    console.log("clickSyrehandler");

    document.querySelector("#syre_container").removeEventListener("mousedown", clickSyreHandler);
    document.querySelector("#syre_sprite").classList.add("splat_vand");
    points--;
    document.querySelector("#score_board_sprite").innerHTML = points;
    document.querySelector("#syre_container").classList.add("frys");
    document.querySelector("#syre_container").addEventListener("animationend", syreReset);

}

function syreReset() {
    console.log("syreReset");
    document.querySelector("#syre_container").classList = "";
    document.querySelector("#syre_sprite").classList = "";
    document.querySelector("#syre_container").removeEventListener("animationend", syreReset);
    document.querySelector("#syre_container").offsetHeight;

    //ny pos til vand
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);


    document.querySelector("#syre_container").classList.add("pos" + randomPos, "fald");

    speed = Math.floor(Math.random() * 4) + 1;
    console.log(speed);
    document.querySelector("#syre_container").classList.add("speed" + speed);
    document.querySelector("#syre_container").addEventListener("mousedown", clickSyreHandler);


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
    document.querySelector("#ild_container").classList = "";
    document.querySelector("#ild_sprite").classList = "";
    document.querySelector("#vand_container").classList = "";
    document.querySelector("#vand_sprite").classList = "";
    document.querySelector("#vand_container2").classList = "";
    document.querySelector("#vand_sprite2").classList = "";
    document.querySelector("#bombe_container").classList = "";
    document.querySelector("#bombe_sprite").classList = "";
    document.querySelector("#syre_container").classList = "";
    document.querySelector("#syre_sprite").classList = "";
    document.querySelector("#time_board_sprite").classList = "";
    //Remove eventlistener
    document.querySelector("#vand_container").removeEventListener("mousedown", clickVandHandler);
    document.querySelector("#vand_container2").removeEventListener("mousedown", clickVand2Handler);
    document.querySelector("#ild_container").removeEventListener("mousedown", clickIldHandler);
    document.querySelector("#bombe_container").removeEventListener("mousedown", clickBombeHandler);
    document.querySelector("#syre_container").removeEventListener("mousedown", clickSyreHandler);

    //Lyt efter færdig animation
    document.querySelector("#ild_container").removeEventListener("animationiteration", ildReset);
    document.querySelector("#vand_container").removeEventListener("animationiteration", vandReset);
    document.querySelector("#vand_container2").removeEventListener("animationiteration", vandReset2);
    document.querySelector("#bombe_container").removeEventListener("animationiteration", bombeReset);
    document.querySelector("#syre_container").removeEventListener("animationiteration", syreReset);

    //Stopper spil hvis tid slut
    document.querySelector("#time_board_sprite").removeEventListener("animationend", stopSpillet);



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
