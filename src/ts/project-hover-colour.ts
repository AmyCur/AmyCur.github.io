// im going ot end my life im so sick of this, why cant i do anything anyone else could do this in like 2 mins im so fuckign usless and i want to kill myself so fucking bad holy shit i have no justification for living

document.addEventListener("DOMContentLoaded", () => {
    const cardsArray = document.getElementsByClassName("cards");

    for (const card of cardsArray) {
        for (let i = 0; i < card.children.length; i++) {
            if (i == 0) {
                card.querySelectorAll("a")[i].addEventListener("mouseover", () => card.querySelectorAll("a")[i].style.backgroundColor = "#f5bde6");
                card.querySelectorAll("a")[i].addEventListener("mouseleave", () => card.querySelectorAll("a")[i].style.backgroundColor = "#00000000");

               
            }
        }
    }


});