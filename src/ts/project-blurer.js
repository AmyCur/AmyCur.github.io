let selected;

addEventListener("DOMContentLoaded", () => {
    const projects = document.getElementsByClassName("project");
    projects[0].style.borderRadius = "1em 0 0 1em";
    projects[projects.length-1].style.borderRadius = "0 1em 1em 0";

    for (const p of projects) {
        p.addEventListener("mouseover", (p) =>{
            selected = p;
            console.log(selected);

            for(const t of projects){
                if(t !== p) t.style.backgroundColor = "black";
            }
        });
    }
});