let colors = ["#f5bde6", "#ee99a0", "#f5a97f", "#eed49f", "#a6da95","#8bd5ca" ]

document.addEventListener("DOMContentLoaded", () => {
    const cardsArray = document.getElementsByClassName("cards");

    for (const card of cardsArray) {
        for (let i = 0; i < card.children.length; i++) {

            const background: HTMLElement = card.querySelectorAll("a")[i].querySelector(".background") as HTMLElement;
            let color: string;

            color = colors[i];

            card.querySelectorAll("a")[i].addEventListener("mouseover", () => {
                background.style.backgroundColor = color;
                background.style.border = `.125em solid ${color}`;
            });

            card.querySelectorAll("a")[i].addEventListener("mouseleave", () => {
                background.style.backgroundColor = "#00000000";
                background.style.border = `.125em solid white`;

            });
        }
    }


});