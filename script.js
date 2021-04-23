let points;
let liv;
let randomPos

window.addEventListener("load", sidenVises);

function sidenVises() {

    points = 0;
    document.querySelector("#score_board_sprite").innerHTML = points;
    liv = 3;
    console.log("sidenVises");

    document.querySelector("#vand_container").classList.add("pos1", "fald");

    document.querySelector("#vand_container").addEventListener("mousedown", clickVandHandler);

    document.querySelector("#ild_container").classList.add("pos2", "fald");

    document.querySelector("#ild_container").addEventListener("mousedown", clickIldHandler);

    document.querySelector("#ild_container").addEventListener("animationiteration", ildReset);
    document.querySelector("#vand_container").addEventListener("animationiteration", vandReset);




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
    document.querySelector("#vand_container").addEventListener("mousedown", clickVandHandler);


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
}

function ildReset() {
    console.log("ildReset");
    document.querySelector("#ild_container").classList = "";
    document.querySelector("#ild_sprite").classList = "";
    document.querySelector("#ild_container").removeEventListener("animationend", ildReset);
    document.querySelector("#ild_container").offsetHeight;
    randomPos = Math.floor(Math.random() * 8) + 1;
    console.log(randomPos);
    document.querySelector("#ild_container").classList.add("pos" + randomPos, "fald");
    document.querySelector("#ild_container").addEventListener("mousedown", clickIldHandler);


}

function ildForsvind() {
    console.log("ildForsvind");
}

//mist liv på vand rammer bund
function vandForsvind() {
    console.log("vandForsvind");
}
